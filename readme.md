# Klikni Backend

## Run the app
- Make sure to install the dependencies described in the [dependencies chapter](#dependencies)
- Make sure to set the .env variables described in the [.env chapter](#.env)

```npm run dev```
This command runs **npx prisma db push** and **npx prisma generate** and then starts **nodemon** instance that runs the express server

```npm run server``` 
This command only starts the nodemon instance (**nodemon ./app.js**) that runs the express server


## Dependencies
### nodemon
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

#### Useful Prisma Commands

Here are some common Prisma commands you might find useful:

- **npx prisma db push**: This command updates your database schema to match your Prisma schema. It's mostly used during development.
- **npx prisma db pull**: This command updates your Prisma schema to match your database schema. It's typically used when you've made changes directly to the database schema and want to align those changes with your Prisma schema.
- **npx prisma generate**: This command generates and updates your Prisma Client code, which you can use to interact with your database.
- **npx prisma studio**: This command opens the Prisma Studio, which is a super handy GUI for managing and viewing your database data.

For more detailed information, please refer to the official Prisma [documentation](https://www.prisma.io/docs/).