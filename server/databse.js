const { Pool } = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "9621",
    host: "localhost",
    port: 5432,
    database: "login_system",
    
})
// code to add a new table to the database
// const adjust = `
// ALTER TABLE accounts DROP CONSTRAINT IF EXISTS accounts_username_key;

// ALTER TABLE accounts DROP CONSTRAINT IF EXISTS accounts_password_key;
// `;

// pool
//     .query(adjust)
//     .then((Response) => {
//     console.log("adjusted")
//     console.log(Response)
// })
// .catch((err) => {
//     console.log(err);
// })

module.exports = pool;