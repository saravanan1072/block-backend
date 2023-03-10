const express=require('express')
const cors=require('cors')
const hollywood=require("./routers/hollywood");
const bollywood=require("./routers/bollwood")
const food=require("./routers/food");
const technology=require("./routers/technology")
const fitness=require("./routers/fitness")
const home=require('./routers/home')
const latest=require("./routers/latest");
const hello=require("./routers/hello")

const app=express();

app.use(cors());

app.use('/',hollywood);
app.use('/',bollywood)
app.use('/',food)
app.use('/',fitness)
app.use('/',technology)
app.use('/',hello)
app.use('/',latest)
app.use('/',home)

app.listen(3001,(req,res)=>{
    console.log("app is running on localhost:3001")
})


