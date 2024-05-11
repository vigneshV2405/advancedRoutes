function employeeHome(req,res){
    res.send('welcome to employee homepage')
}
function getAllemployees(req,res){
    res.send('all employees route')
}
function getEmployeebyId(req,res){
    res.send(`${req.params.id} employee details`)
}
function addEmployee(req,res){
    res.send('lets add a new employee')
}

module.exports = {
    employeeHome,
    getAllemployees,
    getEmployeebyId,
    addEmployee
}