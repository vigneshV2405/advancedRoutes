const Employee = require('./employee.model.js')

function employeeHome(req,res){
    res.send('welcome to employee homepage')
}
function getAllemployees(req,res){
    Employee.find().then((resp)=>{
        res.send(resp)
    }).catch((err)=>{
        res.send(`Something went wrong. ${JSON.stringify(err)}`)
    })
}
function getEmployeebyId(req,res){
    Employee.find({name:req.params.id}).then((resp)=>{
        if(resp.length){
            res.send(resp)
        }
        else{
            res.send('no match found')
        }
    }).catch((err)=>{
        res.send(`Something went wrong. ${JSON.stringify(err)}`)
    })
}
function addEmployee(req,res){
    res.sendFile(__dirname+'/addEmployee.html')
}
function postEmployee(req,res){
    let newEmployee = new Employee(req.body)
    newEmployee.save().then((resp)=>{
        res.redirect('/employee/getAll')
    }).catch((err)=>{
        res.send(`error encountered. ${JSON.stringify(err)}`)
    })
}

module.exports = {
    employeeHome,
    getAllemployees,
    getEmployeebyId,
    addEmployee,
    postEmployee
}