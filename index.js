const inquirer = require('inquirer')


// require your classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
        ${engineer.getgithubusername}
        ${engineer.getName()}
        </div>`;
    htmlArr.push(engineer);
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

createManager();





