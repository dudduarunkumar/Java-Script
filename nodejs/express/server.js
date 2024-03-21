const express = require("express")
// Modules in node

const app = express()

const {MongoClient} = require("mongodb")  // 
const db_url= "mongodb+srv://arunduddu:y2cgWzlKctUOfhH2@cluster0.skspsbu.mongodb.net/"
const client = new MongoClient(db_url)

const rundb =async()=>{
    await client.connect()
    // if(client){
    //     console.log("Mongodb connection successful");
    // }else{
    //     console.log("Mongodb connection unsuccessful");
    // }

    const db = client.db("Cluster0")
    const collections=db.collection("products")
    const record = await collections.findOne()
    console.log(record);
}

rundb()
const fs=require("fs")

const cors= require("cors")

const bodyParser= require("body-parser")
const { log } = require("console")

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())


/*
app.get('/',function(request,response){
    response.send("Hello world!, from \"response\"")
    // response.send("Hello world!")
    // console.log("Hello world!, from \"console\"");
    console.log("Hello world!, ");
})
*/


/*
app.get('/userName',function(request,response){
    response.send("Hello Arun...")
})
*/


/*
// get response as Array of objects
app.get('/users1',function(request,response){
    response.send([{id:1,name:"Arun1"},{id:2,name:"Neeraja"},{id:3,name:"Lahari"},])
    
}) 
*/


app.get('/arunusers',function(request,response){
    // response.send([{id:1,name:"Arun1"},{id:2,name:"Neeraja"},{id:3,name:"Lahari"},])
    fs.readFile("./responses/users.json","utf8",(err,data)=>{
        if(err) throw err;
        let res={
            users:JSON.parse(data),
            status:"success",
            code:200
        }
        console.log("users :",data)
        response.send(res)
    })
})

app.post("/createuser",(request,response)=>{
    // console.log("post--:",request.body)
    const {id,name,email}=request.body
    if(id.length>0 && name.length>0 && email.length>0){
        response.send({
            status:"Success",
            code:102,
            msg:"User insert successfully"
        })
    }else{
        response.send({
            status:"Fail",
            code:104,
            msg:"User not insert "
        })
    }
})


app.put("/updateuser",(request,response)=>{
    // console.log("update--:",request.body)
    const {id,name,email}=request.body
    if(id=="002"){
        response.send({
            status:"Success",
            code:102,
            msg:"User updated successfully"
        })
    }else{
        response.send({
            status:"Fail",
            code:104,
            msg:"User not updated "
        })
    }
})

app.delete("/deleteuser",(request,response)=>{
    console.log("delete--:",request.body)
    const {id}=request.body
    if(id=="004"){
        response.send({
            status:"Success",
            code:101,
            msg:"User deleted successfully"
        })
    }else{
        response.send({
            status:"Fail",
            code:104,
            msg:"User not deleted "
        })
    }
})


// web server
app.listen(8080)