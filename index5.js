
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.send(`
<!DOCTYPE html>
<html>
<head>
<title>BMI Calculator</title>

<style>
body{
    font-family: Arial;
    background:#f2f2f2;
    text-align:center;
    margin-top:80px;
}

.container{
    background:aliceblue;
    padding:40px;
    width:300px;
    height:275px;
    margin:auto;
    border-radius:15px;
    box-shadow:0 0 10px gray;
}

input{
    padding:8px;
    width:90%;
    margin:5px;
}

button{
    padding:10px;
    width:100%;
    background:#28a745;
    color:white;
    border:none;
    border-radius:5px;
}

button:hover{
    background:#218838;
}
</style>

</head>

<body>

<div class="container">

<h2>BMI Calculator</h2>

<form method="POST" action="/calculate">

<input type="number" name="weight" placeholder="Weight (kg)" required>

<input type="number" name="height" placeholder="Height (cm)" required>

<br><br>

<button type="submit">Calculate BMI</button>

</form>

</div>

</body>
</html>
`);
});

app.post("/calculate", (req, res) => {

let weight = parseFloat(req.body.weight);
let height = parseFloat(req.body.height) / 100;

if(weight <= 0 || height <= 0){
    return res.send("<h3 style='color:red;'>Invalid Input</h3><a href='/'>Go Back</a>");
}
let bmi = weight / (height * height);
let category = "";
let color = "";

if (bmi < 18.5) {
    category = "Underweight";
    color = "orange";
}
else if (bmi < 25) {
    category = "Normal weight";
    color = "green";
}
else if (bmi < 30) {
    category = "Overweight";
    color = "gold";
}
else {
    category = "Obese";
    color = "red";
}

res.send(`
<html>
<body style="font-family:Arial;text-align:center;margin-top:100px">

<h2>Your BMI is ${bmi.toFixed(2)}</h2>

<h3 style="color:${color}">Category: ${category}</h3>

<br>

<a href="/" style="background:#007bff;color:white;padding:10px;text-decoration:none;border-radius:5px;">Calculate Again</a>

</body>
</html>
`);

});
app.listen(3000, () => {
console.log("Server running at http://localhost:3000");
});
