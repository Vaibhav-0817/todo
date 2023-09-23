import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app=express();

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.listen(3000,()=>
{
    console.log("listening on port 3000");
});

app.get("/",(req,res)=>
{ 
   res.sendFile(__dirname + "/public/index.html");
});

app.get("/work",(req,res)=>
{ 
   res.sendFile(__dirname + "/public/work.html");
});