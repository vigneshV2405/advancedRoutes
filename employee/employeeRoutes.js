const express = require('express');
const Router = express.Router();
const { employeeHome, getAllemployees, getEmployeebyId, addEmployee } = require('./employee_controllers')

Router.get('/',employeeHome)
Router.get('/getAll',getAllemployees)
Router.get('/getemployee/:id',getEmployeebyId)
Router.get('/addEmployee',addEmployee)

module.exports = Router;