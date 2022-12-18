const inquirer = require('inquirer')
const mysql = require('mysql2');
const dbConfig = require('./config/config')
require('console.table');
const db = mysql.createConnection(dbConfig,
console.log(`Connected to ${process.env.DB_NAME}`))


inquirer
manager.prompt([
    {
        type: 'input',
        message:'Team manager name:',
        name:'ManagerNm'

    },
    {
        type:'input',
        message:'Team manager employee ID:',
        name:'ManagerID'
    },
    {
        type:'input',
        message:'Team manager email address:',
        name:'ManagerEmail'
    },
    {
        type:'input',
        message:'Team manager office number:',
        name:'ManagerOff'
    },

    .then((response) => {
        const mngrString = JSON.stringify(response);
        const mngrAnswer = JSON.parse(mngrString);
        console.log(mngrAnswer);
        const { ManagerNm, ManagerID, ManagerEmail, ManagerOff } = managerAnswer;
        console.log(ManagerNm);
        return(managerAnswer);
    })
    .then((tManager) =>{
        if (tManager != ('')){
            inquirer
            .prompt([
                {
                    type:'checkbox',
                    message:'Would you like to add an engineer, intern, or end the team bulding process?',
                    choices:['engineer', 'intern', 'end'],
                    name:'Choose'
    
                }
            ])
        }
        else {
            console.log('Please enter Manager information.');
        }
    })])


    var dict = {"one" : [15, 4.5],
    "two" : [34, 3.3],
    "three" : [67, 5.0],
    "four" : [32, 4.1]};
    var dictstring = JSON.stringify(dict);
    var fs = require('fs');
    fs.writeFile("thing.json", dictstring, function(err, result) {
        if(err) console.log('error', err);
    });

const inquirer = require('inquirer');


