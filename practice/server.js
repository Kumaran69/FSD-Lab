// const express = require('express')
// const app = express()

// app.use(express.urlencoded({ extended: true }))

// // Home Page
// app.get('/', (req, res) => {
// res.send(`
// <h2>Technical Event Feedback</h2>

// <form method="POST" action="/feedback">
// Name:<br>
// <input type="text" name="name" required><br><br>

// Event Name:<br>
// <input type="text" name="event" required><br><br>

// Rating:<br>
// <select name="rating">
// <option>Excellent</option>
// <option>Good</option>
// <option>Average</option>
// <option>Poor</option>
// </select><br><br>

// Comments:<br>
// <textarea name="comments"></textarea><br><br>

// <button type="submit">Submit Feedback</button>
// </form>
// `)
// })

// // Feedback Route
// app.post('/feedback', (req, res) => {

// const { name, event, rating, comments } = req.body

// res.send(`
// <h2>Feedback Received</h2>
// <p><b>Name:</b> ${name}</p>
// <p><b>Event:</b> ${event}</p>
// <p><b>Rating:</b> ${rating}</p>
// <p><b>Comments:</b> ${comments}</p>
// `)

// })

// app.listen(3000, () => {
// console.log("Server running on http://localhost:3000")
// })


// const readline=require('readline').createInterface({
// input:process.stdin,
// output:process.stdout
// })

// readline.question("Enter number:",num=>{
// let fact=1

// for(let i=1;i<=num;i++){
// fact*=i
// }

// console.log(fact)
// readline.close()
// })


// const readline=require('readline').createInterface({
// input:process.stdin,
// output:process.stdout
// });

// readline.question("Enter Radius:",r=>{
// let area=3.14*r*r;
// console.log("Area of Circle:",area);
// readline.close();
// });

// const readline=require('readline').createInterface({
// input:process.stdin,
// output:process.stdout
// });

// readline.question("Enter marks:",m1=>{
// readline.question("Enter marks:",m2=>{
// readline.question("Enter marks:",m3=>{

// let avg=(Number(m1)+Number(m2)+Number(m3))/3;
// console.log("Average:",avg);

// readline.close();
// });
// });
// });

// const readline=require('readline').createInterface({
// input:process.stdin,
// output:process.stdout
// });

// readline.question("Basic Salary:",sal=>{

// let hra=sal*0.1;
// let da=sal*0.2;

// let total=Number(sal)+hra+da;

// console.log("Total Salary:",total);

// readline.close();
// });


// const readline=require('readline').createInterface({
// input:process.stdin,
// output:process.stdout
// });

// readline.question("Weight:",w=>{
// readline.question("Height:",h=>{

// let bmi=w/(h*h);
// console.log("BMI:",bmi);

// readline.close();

// });
// });

const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
fs.readFile('index.html',(err,data)=>{
res.write(data);
res.end();
});
}).listen(3000,()=>{
console.log("Server running at http://localhost:3000");
});

