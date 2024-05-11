require('dotenv').config();
const express = require('express');
const app = express();
const employeeRoute = require('./employee/employeeRoutes.js')

app.get('/',(req,res)=>{
    res.send('welcome to homepage')
})
app.use('/employee',employeeRoute)

app.listen(process.env.PORT,()=>{console.log(`server running on ${process.env.PORT}`)})