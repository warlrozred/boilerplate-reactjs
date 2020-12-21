const express = require('express')
const key = require('ckey')

const app = express()
const port = key.SERVER_PORT

app.use(express.json())

app.listen(port, () => {
    console.log(`Server Status: Port (${port})`)
})