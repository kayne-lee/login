const { Pool } = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "9621",
    host: "localhost",
    port: 5432,
    database: "login_system",
    
})
// code to add a new table to the database
// const createTblQry = `CREATE TABLE accounts (
//     user_id serial PRIMARY KEY,
//     username VARCHAR ( 50 ) UNIQUE NOT NULL,
//     password VARCHAR ( 50 ) UNIQUE NOT NULL);`;

// pool
//     .query(createTblQry)
//     .then((Response) => {
//     console.log("table created")
//     console.log(Response)
// })
// .catch((err) => {
//     console.log(err);
// })

module.exports = pool;