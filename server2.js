const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
/* MongoDB Connection */
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

/* Schema */

const studentSchema = new mongoose.Schema({
name:String,
department:String,
year:String,
email:String,
mobile:String
});
const Student = mongoose.model("Student",studentSchema);
/* CREATE */
app.post("/addStudent",async(req,res)=>{
const student = new Student(req.body);
await student.save();
res.send("Student Added");
});
/* READ */
app.get("/students",async(req,res)=>{
const students = await Student.find();
res.json(students);
});
/* GET SINGLE STUDENT (EDIT) */
app.get("/getStudent/:id",async(req,res)=>{
const student = await Student.findById(req.params.id);
res.json(student);
});
/* UPDATE */
app.put("/updateStudent/:id",async(req,res)=>{
await Student.findByIdAndUpdate(req.params.id,req.body);
res.send("Updated");
});
/* DELETE */
app.delete("/deleteStudent/:id",async(req,res)=>{
await Student.findByIdAndDelete(req.params.id);
res.send("Deleted");
});
app.listen(2000,()=>{
console.log("Server running on http://localhost:2000");
});