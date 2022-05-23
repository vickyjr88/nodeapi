const express = require('express')
const db = require('./config/database')
const app = express()

async function testDbConnection() {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testDbConnection()

app.get('/', (req, res) => {
    console.log(req, res)
    res.send("Up and running")
})

const port = process.env.PORT || 3000;
app.listen(port, console.log(`The server is running on ${port}`))