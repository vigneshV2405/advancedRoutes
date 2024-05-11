const express = require('express');
const app = express();
const employeeRoute = require('./employee/employeeRoutes.js')

app.get('/',(req,res)=>{
    res.send('welcome to homepage')
})
app.use('/employee',employeeRoute)

app.listen(4000,()=>{console.log('server running on 4000')})