const fs = require('fs');
const path = require('path');
const { getDMMF } = require('@prisma/sdk');
const YAML = require('yaml');

async function generateSchemas() {
  const schemaPath = path.join(__dirname, '../prisma/schema.prisma');
  const schemaContent = fs.readFileSync(schemaPath, 'utf8');
  const dmmf = await getDMMF({ datamodel: schemaContent });

  const enums = dmmf.datamodel.enums.reduce((acc, enumDef) => {
    acc[enumDef.name] = enumDef.values.map(value => value.name);
    return acc;
  }, {});

  for (const model of dmmf.datamodel.models) {
    const schema = {
      type: 'object',
      properties: {},
      required: []
    };

    for (const field of model.fields) {
      if (field.kind === 'scalar') {
        schema.properties[field.name] = { type: mapPrismaTypeToOpenAPI(field.type, enums) };
        if (!field.isNullable && !field.isList) {
          schema.required.push(field.name);
        }
      } else if (field.kind === 'object') {
        if (field.isList) {
          schema.properties[field.name] = {
            type: 'array',
            items: { $ref: `./${field.type}.yaml` }
          };
        } else {
          schema.properties[field.name] = { $ref: `./${field.type}.yaml` };
        }
      }
    }

    const schemaPath = path.join(__dirname, '../swagger/schemas', `${model.name}.yaml`);
    if (fs.existsSync(schemaPath)) {
      const existingSchema = YAML.parse(fs.readFileSync(schemaPath, 'utf8'));
      schema.properties = { ...existingSchema.properties, ...schema.properties };
      schema.required = Array.from(new Set([...existingSchema.required, ...schema.required]));
    }

    fs.writeFileSync(schemaPath, YAML.stringify(schema));
  }
}

function mapPrismaTypeToOpenAPI(type, enums) {
  if (enums[type]) {
    return {
      type: 'string',
      enum: enums[type]
    };
  }

  switch (type) {
    case 'String':
      return 'string';
    case 'Int':
      return 'integer';
    case 'Float':
      return 'number';
    case 'Boolean':
      return 'boolean';
    case 'DateTime':
      return 'string';
    case 'Json':
      return 'object';
    default:
      return 'string';
  }
}

generateSchemas().catch(e => {
  console.error(e);
  process.exit(1);
});