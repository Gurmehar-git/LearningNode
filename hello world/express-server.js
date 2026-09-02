const express=require('express');
const app=express();

app.get("/students/:id",((req,res)=>{
    const student_id=req.params.id;
    res.send(`student id is ${student_id}`);

}))
app.listen(3000,()=>{
    console.log("server is running on port 3000");
}
);