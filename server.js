require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const employeeRoute = require('./employee/employeeRoutes.js')
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('welcome to homepage')
})
app.use('/employee',employeeRoute)

app.listen(process.env.PORT,()=>{console.log(`server running on ${process.env.PORT}`)})