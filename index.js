// Write your solution in this file!
const employee = {
    employee: "Sam",
    streetAddress: "11 Broadway"    
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = { ...employee };
    newEmployee[key] = value
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, key, value){
     newEmployee[key] = value 
     return newEmployee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = { ...employee }
    delete newEmployee[key]
    return newEmployee
}   
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}