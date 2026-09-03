const express=require('express');
const app=express();
app.get("/students",(req,res)=>{
    res.send(`heyyyyyy`);

});

console.log("hello world");

app.get("/students/:id",(req,res)=>{
    const student_id=req.params.id;
    res.send(`student id is ${student_id}`);

});
app.listen(3000)