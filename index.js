const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

var employees = [];

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

function genMgr(info) {
    const mgr = new Manager (
        info.name,
        info.id,
        info.email,
        info.officeNumber
        );
    employees.push(mgr);
    genMgrCard();
  }

  function genEng(info) {
    const eng = new Engineer (
        info.name,
         info.id,
          info.email,
           info.github
        );
    employees.push(eng);
    genEngCard();
  }

  function genInt(info) {
    const int = new Intern (
        info.name,
         info.id,
          info.email,
           info.school
        );
    employees.push(int);
    genIntCard();
  };

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
            console.log(employees);
            genCards(employees);
        } else {
            init();
        }
    } catch (err) {
        return console.error(err);
    }
};

function genCards = ({
    plchldr
}) =>
`<div class='container has-text-centered'>
<div class='columns is-mobile'>
  <div class='column'>
    <div class="card">
      <div class="card-image">
        <figure class="image is-2by1">
          <img src=
"${imageforrole}"
               alt="employee">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src=
"${iconhere}"
                 alt="Placeholder image">
            </figure>
          </div>

          <div class="media-content">
            <p class="title is-5">
              ${EmployeeNameHere}
            </p>

            <p class="subtitle is-6">
            ${EmployeeRoleHere}
            </p>
          </div>
        </div>

        <div class='content'>
          <div class="media-content">
            <ul class='infoUl'>
              <li id="li1" >${EmployeeIDHere}</li>
              <li id="li2" >${EmployeeEMAILHere}</li>
              <li id="li3" >${EmployeeGIT/OFFICE/SCHOOLHere}</li>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`

function genHTML() {
    `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            <link rel="stylesheet" href="./Assets/CSS/style.css" />
            <script src="https://kit.fontawesome.com/54da991eb7.js" crossorigin="anonymous"></script>
            <title>Team Portfolio Generator</title>
        </head>
    
    <body>
        <header>
          <section class="hero">
            <div class="hero-body">
              <h1 class="title">
                Organization
              </h1>
            </div>
          </section>
        </header>
    
        <div class="columns" id="cardcolumns">
    
 ${INSERT FINAL CARDS HERE}
    
        </div>
        
            <footer class="footer">
                <div class="content has-text-centered">
                    <h6>Created by Jordan Covarrubias aka "AuraFly"</h6>
                </div>
            </footer>
        </section>
    
    </body>
    </html>``
};

init();
