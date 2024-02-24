const { Pool } = require('pg');

const DATABASE_URL = '';
//const databaseConfig = { connectionString: process.env.DATABASE_URL};

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'klikni',
    password: 'xpscklvy',
    port: 5432,
})

const query = async (query, params) => {
    pool.query(query, params, (err, res) => {
        console.log(err, res)
        pool.end();

        if (err) {
            console.log("ERROR")
            return err.stack;
        } else {
            return res.rows;
        }
    })
};


module.exports = {
    pool,
    query
};