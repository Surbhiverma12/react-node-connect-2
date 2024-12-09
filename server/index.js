const express = require("express")
const cors = require("cors")

const app = express()
const port = 8080

app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`the server is running on port: http://localhost:${port}`)
})

app.post("/api", (req, res) => {
    const { name } = req.body
    res.json({message: ` Hello ${name}! Welcome from the  node.js api ;-)`})
})