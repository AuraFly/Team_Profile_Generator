//importing classes and required modules
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// arrays used for card creation. 'employees' array is not fully utilized, but is present for a future idea.
var employees = [];
var rdyCards = [];

//Inquirer questions. Github/OfficeNumber/School are only asked if Engineer/Manager/Intern are selected.
const empQuestions = [
    {
        type: 'input',
        message: 'What is the name of the employee?',
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the employee's ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the employee's email address?",
        name: 'email',
    },
    {
        type: 'list',
        message: "What is the employee's role?",
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        message: "What is the engineer's github username?",
        name: 'github',
        when: (answers) => answers.role === 'Engineer',
    },
    {
        type: 'input',
        message: "What is the Manager's office number?",
        name: 'officeNumber',
        when: (answers) => answers.role === 'Manager',
    },
    {
        type: 'input',
        message: "What school is the Intern associated with?",
        name: 'school',
        when: (answers) => answers.role === 'Intern',
    },
    {
        type: 'list',
        message: "Do you have another employee to add?",
        name: 'done',
        choices: ['Yes', 'No']
    },
];

//Functions that takes the info passed from "Init" and creates new objects utilizing the specified class.
function genMgr(info) {
    const mgr = new Manager (
        info.name,
        info.id,
        info.email,
        info.officeNumber
        );
    employees.push(mgr);
    genMgrCard(mgr);
};

function genEng(info) {
    const eng = new Engineer (
        info.name,
        info.id,
        info.email,
        info.github
        );
    employees.push(eng);
    genEngCard(eng);
};

function genInt(info) {
    const int = new Intern (
        info.name,
        info.id,
        info.email,
        info.school
        );
    employees.push(int);
    genIntCard(int);
};

// init will fire the inquirer questions and provides if statements to pass the provided info into the role functions listed above whenever they are finished being asked.
// if the user answers yes, it repeats, if the user answers no it generates the html.
const init =  async () => {
    console.log('Please answer the following questions:')
    try {
        const answers = await inquirer.prompt(empQuestions);
        if (answers.role === 'Manager') {
            genMgr(answers);
        } else if (answers.role === 'Engineer') {
            genEng(answers);
        } else if (answers.role === 'Intern') {
            genInt(answers);
        }
        const answersAgain = answers;
        if (answersAgain.done === 'No') {
            console.log('Thank you. One moment as the HTML is generated.')
            genHTML()
        } else {
            init();
        }
    } catch (err) {
        return console.error(err);
    }
};

//function takes the class data and passes it into an HTML template and then puts it into an array.
function genMgrCard(mgr) {
    const mgrCard =
    `<div class='container has-text-centered'>
    <div class='columns is-mobile'>
    <div class='column'>
        <div class="card">
        <div class="card-image">
            <figure class="image is-2by1">
            <img src=
    "../Assets/IMG/mgr.jpg"
                alt="employee">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
            <div class="media-left">
                <figure class="image is-48x48">
                <img src=
    "../Assets/IMG/mgricn.png"
                    alt="mgricon">
                </figure>
            </div>

            <div class="media-content">
                <p class="title is-5">
                ${mgr.getName()}
                </p>

                <p class="subtitle is-6">
                ${mgr.getRole()}
                </p>
            </div>
            </div>

            <div class='content'>
            <div class="media-content">
                <ul class='infoUl'>
                <li id="li1" >ID: ${mgr.getId()}</li>
                <li id="li2" ><a href="mailto:${mgr.getEmail()}">Contact</a></li>
                <li id="li3" >Office Number: ${mgr.getofficeNumber()}</li>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>`

rdyCards.push(mgrCard);
};

//function takes the class data and passes it into an HTML template and then puts it into an array.
function genEngCard(eng) {
    const engCard =
    `<div class='container has-text-centered'>
    <div class='columns is-mobile'>
    <div class='column'>
        <div class="card">
        <div class="card-image">
            <figure class="image is-2by1">
            <img src=
    "../Assets/IMG/eng.jpg"
                alt="employee">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
            <div class="media-left">
                <figure class="image is-48x48">
                <img src=
    "../Assets/IMG/engicn.jpg"
                    alt="engicon">
                </figure>
            </div>
    
            <div class="media-content">
                <p class="title is-5">
                ${eng.getName()}
                </p>
    
                <p class="subtitle is-6">
                ${eng.getRole()}
                </p>
            </div>
            </div>
    
            <div class='content'>
            <div class="media-content">
                <ul class='infoUl'>
                <li id="li1" >ID: ${eng.getId()}</li>
                <li id="li2" ><a href="mailto:${eng.getEmail()}">Contact</a></li>
                <li id="li3" >Github: <a href="https://github.com/${eng.getGithub()}">GitHub Profile</a></li>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>`
    
    rdyCards.push(engCard);
    };

    //function takes the class data and passes it into an HTML template and then puts it into an array.
    function genIntCard(int) {
        const intCard =
        `<div class='container has-text-centered'>
        <div class='columns is-mobile'>
        <div class='column'>
            <div class="card">
            <div class="card-image">
                <figure class="image is-2by1">
                <img src=
        "../Assets/IMG/int.jpg"
                    alt="employee">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                    <img src=
        "../Assets/IMG/inticn.png"
                        alt="inticon">
                    </figure>
                </div>
        
                <div class="media-content">
                    <p class="title is-5">
                    ${int.getName()}
                    </p>
        
                    <p class="subtitle is-6">
                    ${int.getRole()}
                    </p>
                </div>
                </div>
        
                <div class='content'>
                <div class="media-content">
                    <ul class='infoUl'>
                    <li id="li1" >ID: ${int.getId()}</li>
                    <li id="li2" ><a href="mailto:${int.getEmail()}">Contact</a></li>
                    <li id="li3" >School: ${int.getSchool()}</li>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>`
        
        rdyCards.push(intCard);
        };

//function takes the array of data that the above functions populate and then inserts it into the final HTML template. Then finally writes to an HTML file called "team.html"
function genHTML() {
    const html =
    `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            <link rel="stylesheet" href="../Assets/CSS/style.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap" rel="stylesheet">
            <title>Team Portfolio Generator</title>
        </head>
    
    <body>
        <header>
        <section class="hero">
            <div class="hero-body">
            <h1 class="title">
                My Team
            </h1>
            </div>
        </section>
        </header>
    
        <div class="columns" id="cardcolumns">
    
${rdyCards.join(" \n")}
    
        </div>
        
            <footer class="footer">
                <div class="content has-text-centered">
                    <h6>Created by Jordan Covarrubias aka "AuraFly"</h6>
                </div>
            </footer>
        </section>
    
    </body>
    </html>`;

    fs.writeFile(
        './dist/team.html',
        html,
        (err) => {
        err ? console.error(err) : console.log('Created "team.html" successfully! Check the dist directory.')
    })
};

init();
