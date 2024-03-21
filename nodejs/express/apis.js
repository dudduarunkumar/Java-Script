const express = require("express")
const app =express()

// app.get("/user",(req,res)=>{
//     console.log("Get call");
// })

// app.post("/user",(req,res)=>{
//     console.log("Post call");
// })

// app.put("/user",(req,res)=>{
//     console.log("Put call");
// })

// app.delet("/user",(req,res)=>{
//     console.log("Delete call");
// })

app.all("/arun",(req,res)=>{
    console.log("all called");
    next()
})

app.listen(8080)