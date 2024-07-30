const express = require("express")
const cors = require("cors")
const pool = require("./databse")

const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.post("/adduser", (req, res) => {
    const username = req.body["username"]
    const password = req.body["password"]
    console.log(username, password)

    const insertSTMT = `INSERT INTO accounts ( username, password ) VALUES ( '${username}', '${password}' );`

    pool.query(insertSTMT)
    .then ((response) => {
        console.log("data saved")
        console.log(response);
    })
    .catch((err) => {
        console.log(err)
    })
})
app.listen(4000, () => console.log("Server on localhost:4000"))

