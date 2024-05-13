const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL).then((res)=>{
    
})

const employeeSchema = new mongoose.Schema({
    name : String,
    mobile : Number,
    DOJ : Date,
    email : String,
    skills : Array
})

module.exports = mongoose.model('employee',employeeSchema)