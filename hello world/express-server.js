const express=require('express');
const app=express();
const http=require('http');

app.get("/",(req,res)=>{
    res.send(`hello world, this is the home page`);
});
app.get("/about",(req,res)=>{
    res.send("This is the about page");
});
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});
// const myserver=http.createServer(app);
// myserver.listen((3000),()=>{
//     console.log("server is running on port 3000");
// });


// app.get("/students",(req,res)=>{
//     res.send(`heyyyyyy`);

// });

// console.log("hello world");

// app.get("/students/:id",(req,res)=>{
//     const student_id=req.params.id;
//     res.send(`student id is ${student_id}`);

// });