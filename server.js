const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/payrollDB")
.then(()=> console.log("MongoDB Connected"))
.catch(err=> console.log(err))

// Schema
const employeeSchema = new mongoose.Schema({

emp_id:String,
name:String,
department:String,
basic_salary:Number,
hra:Number,
allowances:Number

})

const Employee = mongoose.model("Employee",employeeSchema)


// Add Employee
app.post("/add", async(req,res)=>{

const emp = new Employee(req.body)
await emp.save()

res.send("Employee Added")

})

// View Employees
app.get("/employees", async(req,res)=>{

const data = await Employee.find()
res.json(data)

})

// Department wise salary
app.get("/department-salary", async(req,res)=>{

const data = await Employee.aggregate([
{
$group:{
_id:"$department",
totalSalary:{
$sum:{
$add:["$basic_salary","$hra","$allowances"]
}
}
}
}
])

res.json(data)

})

// Average salary
app.get("/average-salary", async(req,res)=>{

const data = await Employee.aggregate([
{
$group:{
_id:"$department",
avgSalary:{
$avg:{
$add:["$basic_salary","$hra","$allowances"]
}
}
}
}
])
res.json(data)
})


// Highest paid employee
app.get("/highest", async(req,res)=>{

const data = await Employee.aggregate([

{
$project:{
name:1,
department:1,
totalSalary:{
$add:["$basic_salary","$hra","$allowances"]
}
}
},

{$sort:{totalSalary:-1}},

{$limit:1}

])

res.json(data)

})

// Lowest paid employee
app.get("/lowest", async(req,res)=>{

const data = await Employee.aggregate([
{
$project:{
name:1,
department:1,
totalSalary:{
$add:["$basic_salary","$hra","$allowances"]
}
}
},

{$sort:{totalSalary:1}},

{$limit:1}

])
res.json(data)
})

// Total payroll
app.get("/total", async(req,res)=>{
const data = await Employee.aggregate([

{
$group:{
_id:null,
totalPayroll:{
$sum:{
$add:["$basic_salary","$hra","$allowances"]
}
}
}
}

])

res.json(data)

})

// Start server
app.listen(3000,()=>{
console.log("Server running on port 3000")
})