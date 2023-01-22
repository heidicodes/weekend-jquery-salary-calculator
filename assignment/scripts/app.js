$(document).ready(onReady);
console.log();

// STATE //

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

let employees = [
{
    firstName: 'Jen',
    lastName: 'Barber',
    idNumber: 4521,
    jobTitle: 'Team Lead',
    salary: 80000
},
    {
    firstName: 'Maurice',
    lastName: 'Moss',
    idNumber: 8724,
    jobTitle: 'Support Team',
    salary: 58000
},
    {
    firstName: 'Roy',
    lastName: 'Smith',
    idNumber: 9623,
    jobTitle: 'Quality Assurance',
    salary: 48000
}
];

// onReady Function //
function onReady() {
    console.log('ready now');
    
    // Initial render to the DOM
    render();

// Handel events here //
// Handling new employee form
    $('#newEmpForm').on('submit', addEmployee);
    $(document).on('click', '.deleteEmpBtn', deleteEmployee);
}

function deleteEmployee() {
    console.log('test');

        let myTr = $(this).parent().parent();
        let indexOfEmp = myTr.index();
        
        employees.splice(indexOfEmp, 1);
        console.log('after removal', employees);
        render();
}


function addEmployee(evt) {
    evt.preventDefault();
    console.log('in addEmployee', $(this));
    
//***** TODO: *****//
// 1. make an employee object 
// 2. make an addEmployee function to add employees as form

// FUNCTION TO ADD EMPLOYEE
    let newEmployee = 
    {
        firstName: $('#empFirstName').val(),
        lastName: $('#empLastName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        salary: $('#annualSalary').val(),
    }

    //console.log('first name', firstName, lastName);
    console.log('Here are the new employees:', newEmployee)


// adding employee to employee object
employees.push(newEmployee);

//$('#emp-table').empty();
// render with the new employees in the array
render();
}
console.log();


function totalMonthlyCosts() {

    let totalSalary = 0;
    for (let employee of employees) {
        totalSalary += employee.salary
    }
    let totalMonthlySalary = totalSalary / 12;
    console.log(totalMonthlySalary, totalSalary);

    return formatter.format (totalMonthlySalary);
}

// RENDER //
function render() {
    
    console.log(`Here's my render`, employees)
    $('#emp-table').empty();

    for (let employee of employees) {
        // logs 
        // console.log('for employee', employee.firstName);

console.log($('#emp-table'))
    $('#emp-table').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${formatter.format(employee.salary)}</td>
            <td>
            <button class="deleteEmpBtn">Delete</button>
            </td>
        </tr>
    `);
    $('#monthlyCosts').text(`Total Monthly Costs: ${totalMonthlyCosts()}`);
    }
}
