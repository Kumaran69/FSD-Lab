const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.send(`
<html>
<head>
<title>Company Feedback Survey</title>
<style>
body{
font-family: Arial;
background:#f4f4f4;
text-align:center;
margin-top:50px;
}
.container{
background:white;
padding:25px;
width:420px;
margin:auto;
border-radius:8px;
box-shadow:0 0 10px gray;
}

input,select{
width:90%;
padding:8px;
margin:6px;
}

.question{
text-align:left;
margin:10px 0;
}

button{
padding:10px;
width:95%;
background:#007bff;
color:white;
border:none;
border-radius:5px;
cursor:pointer;
}

button:hover{
background:#0056b3;
}

h2{
color:#333;
}
</style>
</head>
<body>

<div class="container">
<h2>Customer Feedback Survey</h2>
<form method="POST" action="/submit">
<input type="text" name="name" placeholder="Customer Name" required>
<input type="email" name="email" placeholder="Email Address" required>
<div class="question">
<p>1. How would you rate our service?</p>
<select name="q1" required>
<option value="">Select</option>
<option>Excellent</option>
<option>Good</option>
<option>Average</option>
<option>Poor</option>
</select>
</div>

<div class="question">
<p>2. How satisfied are you with our product quality?</p>
<select name="q2">
<option value="">Select</option>
<option>Very Satisfied</option>
<option>Satisfied</option>
<option>Neutral</option>
<option>Unsatisfied</option>
</select>
</div>

<div class="question">
<p>3. Was our staff helpful and professional?</p>
<select name="q3">
<option value="">Select</option>
<option>Yes</option>
<option>No</option>
<option>Somewhat</option>
</select>
</div>

<div class="question">
<p>4. How easy was it to use our service?</p>
<select name="q4">
<option value="">Select</option>
<option>Very Easy</option>
<option>Easy</option>
<option>Difficult</option>
<option>Very Difficult</option>
</select>
</div>

<div class="question">
<p>5. Would you recommend us to others?</p>
<select name="q5">
<option value="">Select</option>
<option>Yes</option>
<option>No</option>
<option>Maybe</option>
</select>
</div>

<div class="question">
<p>6. Overall experience with our company?</p>
<select name="q6">
<option value="">Select</option>
<option>Excellent</option>
<option>Good</option>
<option>Average</option>
<option>Poor</option>
</select>
</div>
<br>
<button type="submit">Submit Feedback</button>
</form>
</div>
</body>
</html>
`);
});
app.post("/submit", (req, res) => {
let { name, email } = req.body;
res.send(`
<html>
<body style="font-family:Arial;text-align:center;margin-top:100px">
<h2 style="background:#28a745;color:white;padding:12px;display:inline-block;border-radius:5px;">
Feedback Submitted Successfully!
</h2>
<br><br>
<p style="font-size:18px;"><b>Name:</b> ${name}</p>
<p style="font-size:18px;"><b>Email:</b> ${email}</p>
<br>
<a href="/" 
style="background:#007bff;color:white;padding:10px;text-decoration:none;border-radius:5px;">
Submit Another Response
</a>
</body>
</html>
`);
});
app.listen(3000, () => {
console.log("Server running at http://localhost:3000");
});