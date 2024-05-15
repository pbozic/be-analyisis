# Klikni Backend

## Run the app

```npm run dev```
This command runs **npx prisma db push** and then starts **nodemon** instance that runs the express server

```nodemon ./app.js``` 
This command only starts the nodemon instance that runs the express server

## Prisma DB
### Prisma Usage Guide

Prisma is an open-source database toolkit that makes it easy to reason about your data and how you work with it. 

#### Setup `.env` for `DATABASE_URL`

First, set up the `.env` file in the root directory of your project and add your database connection string as follows:

DATABASE_URL="postgresql://user:password@localhost:5432/databaseName"

Replace `"postgresql://user:password@localhost:5432/databaseName"` with your actual database connection string.

#### Prisma Schema

Your Prisma schema file (`./prisma/prisma.schema`) describes your database tables, relations, and also serves as the source of truth for your database schema. It contains model blocks which represent your application models. Each field in a model represents a column in the corresponding database table.

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