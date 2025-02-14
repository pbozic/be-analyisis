const prisma = require("./prisma");
const fs = require("fs");
const { getDMMF } = require('@prisma/sdk');
const path = require("path");
async function generateRelationMap() {
    const schemaPath = path.join(__dirname, './schema.prisma');
    console.log("Schema Path: ", schemaPath);   
    const schemaContent = fs.readFileSync(schemaPath, 'utf8');
    const dmmf = await getDMMF({ datamodel: schemaContent });
    const relationMap = {};
    console.log(dmmf.datamodel.models);
    for (const model of dmmf.datamodel.models) {
        console.log("Model Name: ", model.name);
        relationMap[model.name] = {};

        model.fields.forEach((field) => {
            if (field.relationName) {
                relationMap[model.name][field.name] = field.type; // Relation field -> Actual model
            }
        });
    }

    // Save to JSON file
    fs.writeFileSync('./relationMap.json', JSON.stringify(relationMap, null, 2));
    console.log("✅ Relation map generated successfully!");
    await prisma.$disconnect();
}

generateRelationMap().catch((err) => {
    console.error("Error generating relation map:", err);
    prisma.$disconnect();
});
