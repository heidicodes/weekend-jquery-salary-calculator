$(document).ready(onReady); {
};

// STATE //
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

// Declaring variable with stored info in array
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

// Events handling here //
// Handling new employee form
    $('#newEmpForm').on('submit', addEmployee);
    $(document).on('click', '.deleteEmpBtn', deleteEmployee);
}

// Function to delete employee from table rows
function deleteEmployee() {
    console.log('test');

        let myTr = $(this).parent().parent();
        let indexOfEmp = myTr.index();
        
        employees.splice(indexOfEmp, 1);
        console.log('after removal', employees);
        render();
}

// function to prevent reload error
function addEmployee(evt) {
    evt.preventDefault();
    console.log('in addEmployee', $(this));
    

// Function to add an employee to the form 
    let newEmployee = 
    {
        firstName: $('#empFirstName').val(),
        lastName: $('#empLastName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        salary: $('#annualSalary').val(),
    }

    // logging new employees to check if working
    // console.log('Here are the new employees:', newEmployee)


// Adding employee to employee object
employees.push(newEmployee);

// Render with the new employees in the array
render();
} // End of addEmployee function

//Function for the total monthly costs
function totalMonthlyCosts() {

    let totalSalary = 0;
    // for loop for new total salary
    for (let employee of employees) {
        totalSalary += Number(employee.salary)
    }
    // Declaring new variable `monthlyCosts` & setting equal to
    // entire annual salary / 12 months
    let monthlyCosts = totalSalary / 12;
    return(monthlyCosts);
}

// RENDER //
function render() {
    console.log(`Here's my render`) // A log to check render is working
    // if statement to add error color display based on condition
    if (totalMonthlyCosts() > 20000) {
       $('#monthlyCosts').addClass('redError')
    } else {  // Removes class `redError` if doesn't meet condition
      $('#monthlyCosts').removeClass('redError')
    };
    // Selecting the table to empty it
    $('#emp-table').empty();
    // for loop looping  through employees
    for (let employee of employees) {
        // console.log('for employee', employee.firstName); // a log to check

console.log($('#emp-table'))
    $('#emp-table').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td class="even">${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${formatter.format(employee.salary)}</td>
            <td>
            <button class="deleteEmpBtn">Delete</button>
            </td>
        </tr>
    `);
    // Formatting the `monthlyCosts`; calling the function to display currency accurately
    $('#monthlyCosts').text(`
    Total Monthly Costs: 
    ${formatter.format(totalMonthlyCosts())}`);
    }
    // jQuery Selectors selecting the form values and setting them to
    // blank string to "empty" after adding new employee to table
    $('#empFirstName').val('');
    $('#empLastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

