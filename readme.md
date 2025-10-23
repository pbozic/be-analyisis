# Klikni Backend

## Run Using Docker (recommended)

We provide a complete set of scripts to manage the entire development environment using Docker. These commands are defined in the `package.json` and abstract the `docker compose` logic for simplicity.

### Available Commands

#### `npm run docker:up`

Starts all the required containers defined in `./Docker/docker-compose.yml`.  
This includes the app server (`node-app`), PostgreSQL, Redis, Elasticsearch, and more.  
It uses `./Docker/dev-up.js` to handle environment pre-checks or bootstrapping logic.

#### `npm run docker:down`

Stops and removes all running containers but **keeps named volumes** (like your PostgreSQL data).

#### `npm run docker:down:full`

Stops and removes all running containers **including volumes and orphan containers**.  
This will wipe any persisted data in the volumes — use with caution.

#### `npm run docker:build`

Alias for `docker:up`. Re-triggers the full container build via `./Docker/dev-up.js`.

#### `npm run node:logs`

Streams logs from the `node-app` container.  
Useful to debug backend issues or observe live console output.

#### `npm run node:restart`

Restarts the `node-app` container without affecting the database or other services.

#### `npm run node:recreate`

Recreates the `node-app` container.  
Use this if you changed dependencies, Dockerfile, or environment variables and need a fresh instance.

#### `npm run node:down`

Stops and removes only the `node-app` container (leaves other containers running).

---

### 🔧 Dev Tools: `dnpm` and `dnpx`

These are helper commands for running `npm` and `npx` **inside the Docker container**, not on your local machine.

Use:

```bash
npm run dnpm <command>
npm run dnpx <command>
```

```bash
npm run dnpm install lodash
npm run dnpx prisma studio
```

This ensures the commands execute inside the running node-app container, matching the actual runtime environment.

## Run the app

- Make sure to install the dependencies described in the [dependencies chapter](#dependencies)
- Make sure to set the .env variables described in the [.env chapter](#.env)

`npm run dev`
This command runs **npx prisma db push** and **npx prisma generate** and then starts **nodemon** instance that runs the express server

`npm run server`
This command only starts the nodemon instance (**nodemon ./app.js**) that runs the express server

1. To install nodemon, run the following command in your terminal:

```bash
    npm install -g nodemon
```

2. If you are using npm locally (without `-g` or `--global` appended), you can also add it to your project with the following command:

```bash
    npm install --save-dev nodemon
```

**Nodemon**: It's a utility that monitors for any changes in your source files and automatically restarts your server, which is very useful during the development process. It saves you from manually stopping and starting the server each time you make changes.

###

## .env

```
    ENVIRONMENT="development"
    BCRYPT_SALT_ROUNDS=12
    JWT_TOKEN_SECRET=
    DATABASE_URL=
```

- **ENVIRONMENT**: This specifies the current environment in which your application is running (e.g., "development", "production", "test").
- **BCRYPT_SALT_ROUNDS**: This variable determines the complexity of the hashing process in bcrypt. A higher value denotes more rounds of hashing, thereby providing better security but requiring more computational resources.
- **JWT_TOKEN_SECRET**: This is the secret key used to sign and verify JSON Web Tokens (JWTs) for authentication purposes. See [Generating JWT Secret](#generating-jwt-secret) form detailed information on generating this variable.
- **DATABASE_URL**: This provides the connection string to your database. It includes information such as the platform (PostgreSQL, MySQL, etc.), host, port, database name, user. More info in [Prisma chapter](#prisma-usage-guide)

### Generating JWT Secret

```
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```

This command is used to generate a base64 encoded string that can be used as a secure JWT (JSON Web Token) secret. When run, it uses the crypto library in Node.js to create 256 random bytes and convert them into a base64 string. You can store this string in your .env file
for `JWT_TOKEN_SECRET`.

### Changing JWT Secret

The JWT token secret is a key used for encoding and decoding the JSON Web Tokens (JWT). It needs to be kept private and secure. In the event you need to change your JWT secret:

- First generate a new secret by running the command provided in [Generating jwt secret](#generating-jwt-secret) in your terminal.
- Replace the 'JWT_TOKEN_SECRET' value in your `.env` file with the newly generated secret.
- Restart your server for the changes to take effect.

Please note that changing the JWT secret will invalidate all previously issued tokens. Therefore, all users will have to re-authenticate to receive new tokens.

## Prisma DB

### Prisma Usage Guide

Prisma is an open-source database toolkit that makes it easy to reason about your data and how you work with it.

#### Setup `.env` for `DATABASE_URL`

First, set up the `.env` file in the root directory of your project and add your database connection string as follows:

DATABASE_URL="postgresql://user:password@localhost:5432/databaseName"

Replace `"postgresql://user:password@localhost:5432/databaseName"` with your actual database connection string.

#### Prisma Schema

Your [Prisma schema file](./prisma/schema.prisma) describes your database tables, relations, and also serves as the source of truth for your database schema. It contains model blocks which represent your application models. Each field in a model represents a column in the corresponding database table.

```prisma
    model Post {
        id Int @id @default(autoincrement())
        createdAt DateTime @default(now())
        title String
        content String?
    }
```

In the example above, `Post` is a model that corresponds to a database table.

#### Migrations

After editing [Prisma schema file](./prisma/schema.prisma) file, we need to generate a .sql file that migrates the current state of the database to the new changes.

We achieve this by running the **npx prisma migrate dev**, the command will ask us for a migration name, a few good examples for migration names (spaces will be converted to \_)

- added users table
- added stripe_customer_id to business
- fixed default value of email on users
- ...

#### Useful Prisma Commands

Here are some common Prisma commands you might find useful:

- **npx prisma db push**: This command updates your database schema to match your Prisma schema. It's mostly used during development.
- **npx prisma db pull**: This command updates your Prisma schema to match your database schema. It's typically used when you've made changes directly to the database schema and want to align those changes with your Prisma schema.
- **npx prisma generate**: This command generates and updates your Prisma Client code, which you can use to interact with your database.
- **npx prisma studio**: This command opens the Prisma Studio, which is a super handy GUI for managing and viewing your database data.

For more detailed information, please refer to the official Prisma [documentation](https://www.prisma.io/docs/).

## ERD

The Entity-Relationship Diagram (ERD) for the database schema can be found [here](./prisma/schemas/ERD.md). This diagram visually represents the structure of the database, including the tables (entities), their fields (attributes), and the relationships between them.

We generate the ERD by first generating the Prisma client and then running a custom script that processes the schema and creates the ERD markdown file. Since many-to-many relations are not directly represented in the generated ERD diagram we add them manually in the post-processing script. An example of junction table that represents a many-to-many relation is the `translatable` table that connects the `translations` and `words`, `categories` and `promo_sections` tables. This example requires specific annotations in the schema to indicate which tables are connected via many-to-many relations and in which namespaces.

```
/// @summary Base entity for translatable content (categories, words, promo sections).
/// @namespace PromoWords
/// @namespace PromoSections
/// @namespace Menus
/// @namespace DailyMeals
/// @hidden
model translatable {
  translatable_id String           @id @default(uuid()) @db.Uuid
  translations    translations[]
  // --------------SEPARATOR--------------
  words           words[]
  categories      categories[] // @namespace Menus, @namespace DailyMeals
  promo_sections  promo_sections[]
}
```

To update the ERD please run the following command:

```bash
npx prisma generate | node ./prisma/schemas/postprocess-erd.mjs
```
