
const express = require("express")
const PORT = proces.env.port
//const HOST = process.env.host

const app = express()

app.get("book", (req, req)=>{
    //console.log(req.url)
})

app.listen(PORT, ()=>{
    console.log(`Server started successfully at http://localhost:${PORT}`)
})