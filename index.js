const inquirer = require('inquirer')


// require your classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Department = require('./models/department');
const Role = require('./models/role');
const Employee = require('./models/employee');
const Intern = require('./lib/Intern');
const Sequelize=require('./db/connection');
const { response } = require('express');

// arr for your inquirer prompts
var teamArr = [];

var htmlArr = [];

// manager prompts
const createManager = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Team manager name:',
                name: 'ManagerNm'

            },
            {
                type: 'input',
                message: 'Team manager employee ID:',
                name: 'ManagerID'
            },
            {
                type: 'input',
                message: 'Team manager email address:',
                name: 'ManagerEmail'
            },
            {
                type: 'input',
                message: 'Team manager office number:',
                name: 'ManagerOff'
            },
        ])
        .then((response) => {
            // took the response from the prompts and created a new instance of your Manager class
            // push the manager into the teamArr
            const manager = new Manager(response.ManagerNm, response.ManagerID, response.ManagerEmail, response.ManagerOff);
            teamArr.push(manager);
            choicesPrompt();
            // const mngrString = JSON.stringify(response);
            // const mngrAnswer = JSON.parse(mngrString);
            // console.log(mngrAnswer);
            // const { ManagerNm, ManagerID, ManagerEmail, ManagerOff } = managerAnswer;
            // console.log(ManagerNm);
            // return(managerAnswer);

            // push the manager variable into an empty array
        })

}

// after the prompt, check the user selection
// engineer then do engineer prompts
// end then create the html
const createEngineer = () => {
    // run inquirer prompt for the engineer name, id, email, github
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Team engineer name:',
                name: 'engineerNm'
            },

            {
                type: 'input',
                message: 'Team engineer employee ID:',
                name: 'engineerID'

            },


            {
                type: "input",
                message: "team engineer email address",
                name: "engineeremail"
            },

            {
                type: "input",
                message: "team engineer github",
                name: "engineergithub"
            },


        ])
        .then((response) => {
            // creating a new instance of your engineer class
            const engineer = new Engineer(response.engineerNm, response.engineerID, response.engineeremail, response.engineergithub)
            teamArr.push(engineer);
            // We run this line so that we can give the user another prompt to choose to make another engineer, intern, or end
            choicesPrompt();


        })
}

const createIntern = () => {
    // inquirer prompt for the intern name, id, email, school
}

const generateCards = team => {
    // loop for each team member
    // conditionals for if it is a manager, engineer, intern
    const engineer = `
        <div>
        ${Engineer.getgithubusername}
        ${Engineer.getName()}
        </div>`;
    htmlArr.push(Engineer);
    console.log(htmlArr, "htmlarr")
    team.forEach(employee => {
        // run a conditional 
        // if (team.getRole() === "Manager")
    });
}

const generateHTML = team => {
    return `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                ${htmlArr}
                </body>
            </html>`
};

const choicesPrompt = () => {

    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add an engineer, intern, or end the team bulding process?',
                choices: ['engineer', 'intern', 'end'],
                name: 'choice'

            }
        ])
        .then((response) => {
            // run a conditional statement
            if (response.choice === 'engineer') {
                // run createEngineer function
                createEngineer();
            }
            if (response.choice === "intern") {
                createIntern();
            }
            if (response.choice === "end") {
                generateCards();
            }
        })
}
function viewEmployee(){

}

function updateEmployee(){
    
}

async function veiwAllEmployees(){
    const rows =await Sequelize.query("SELECT * FROM view_employees");
   
    console.table(rows[0]);
    mainMenu();
}

async function addRoles(){
    const title = await prompt("What is the name of the role?");
    const salary = await prompt("What is the salary of the role?");
    const deptId = await getDepartmentId("What is the department for the role?");
    const role = {title:title, salary:salary, department_id:deptId}
   
    Role.create(role);
    
    mainMenu();
}
async function addNewEmployee(){
   
    const firstName = await prompt("What is the employee's last name?");
    const lastName = await prompt("What is the employee's first name?");
    const roleId = await getRoleId("What is the employee's role?");
    const managerId = await getManagerId("Who is the employee's manager?");
    const emp = {last_name:lastName, first_name:firstName, role_id:roleId, manager_id:managerId}
   
    Employee.create(emp);
    
    mainMenu();
}
async function veiwAllDepartments(){
    const rows =await Department.findAll();
    const data = [];
    for(let i in rows)
    {
        data.push (rows[i].dataValues);
    }
    console.table(data, ['id', 'department_name']);
    mainMenu();
}
async function veiwAllRoles(){
    const rows =await Sequelize.query("SELECT * FROM view_roles");
   
    console.table(rows[0]);
    mainMenu();
}
async function getDepartmentId(message){
    const rows =await Department.findAll();
    const data = [];
    for(let i in rows)
    {
        data.push ({value: rows[i].dataValues.id, name:rows[i].dataValues.department_name});
    }

    const dept =await inquirer.prompt([
        {
            name:"deptId",
            type:"list",
            message:message,
            choices:data
        }
    ])
 
    return dept.deptId;
}
async function getRoleId(message){
    const rows =await Role.findAll();
    const data = [];
    for(let i in rows)
    {
        data.push ({value: rows[i].dataValues.id, name:rows[i].dataValues.title});
    }

    const role =await inquirer.prompt([
        {
            name:"roleId",
            type:"list",
            message:message,
            choices:data
        }
    ])
   
    return role.roleId;
}
async function getManagerId(message){
    const rows =await Employee.findAll();
    const data = [];
    for(let i in rows)
    {
        data.push ({value: rows[i].dataValues.id, name:rows[i].dataValues.last_name+", "+rows[i].dataValues.first_name});
    }

    const mgr =await inquirer.prompt([
        {
            name:"managerId",
            type:"list",
            message:message,
            choices:data
        }
    ])
   
    return mgr.managerId;
}
async function getEmployeeId(message){
    const rows =await Employee.findAll();
    const data = [];
    for(let i in rows)
    {
        data.push ({value: rows[i].dataValues.id, name:rows[i].dataValues.last_name+", "+rows[i].dataValues.first_name});
    }

    const emp =await inquirer.prompt([
        {
            name:"employeeId",
            type:"list",
            message:message,
            choices:data
        }
    ])
   
    return emp.employeeId;
}
async function updateEmployee ()
{
    const empId = await getEmployeeId("Which employee's role do you want to update?");
    const roleId = await getRoleId("Which role do you want to assign to the selected employee?");
    const emp = await Employee.findByPk(empId);

    if(emp)
    {
        emp.update({role_id:roleId});
    } 
    mainMenu();
}
async function addNewDepartment(){
    const deptName = await prompt ("What is the name of the department?");
    const dept = {department_name:deptName}
    Department.create(dept);
    mainMenu();
}

async function prompt(msg) {
    const ans = await inquirer
        .prompt([
            {
                name: 'answer',
                message: msg
            },
        ]);

    return ans.answer;
}



const mainMenu = () => {

    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would would you like to do ?',
                choices: ['View All Employees','Add New Employee', 'Update Employee Role',"View All Roles",'Add Roles',
                'View All Departments','Add New Department', 'end'],
                name: 'choice'

            }
        ])
        .then((response) => {
            // run a conditional statement
            if (response.choice === 'View Employee') {
                viewEmployee();
            }
            if(response.choice === 'Update Employee Role'){
                 updateEmployee();
            }
            if(response.choice === 'View All Roles'){
                veiwAllRoles();
            }
            if(response.choice === 'View All Employees'){
                veiwAllEmployees();
            }
            if(response.choice === 'Add Roles')
            {
                addRoles();
            }
            if(response.choice === 'View All Departments')
            {
                veiwAllDepartments();
            }
            if(response.choice === 'Add New Department')
            {
                addNewDepartment();
            }
            if(response.choice === 'Add New Employee')
            {
                addNewEmployee();
            }
            if (response.choice === "end") {
                return;
            }

           // if (response.choice === '')
        })
}



mainMenu();





