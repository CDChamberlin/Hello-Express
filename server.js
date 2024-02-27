const express = require("express")
require("dotenv").config()

const app = express();
const PORT = process.env.PORT || 8080

app.use(express.json())

app.get("/", (req, res) =>{
    res.json({
        message: "Hello from Express and AWS"
    })
})



app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`)
})
