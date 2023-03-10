const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const fs = require('fs');

function filterTeam(members) {
    teamArray = [];
    // create a function that returns the manager card

    members.forEach(element => {
        if (element.getRole() === "Manager") {
            const manager = returnManager(element)
            teamArray.push(manager);
        }
        else if (element.getRole() === "Engineer") {
            const engineer = returnEngineer(element)
            teamArray.push(engineer);
        }
        else if (element.getRole() === "Intern") {
            const intern = returnIntern(element)
            teamArray.push(intern);
        }
        return teamArray;
    });

    function returnManager(Manager) {
        return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h4 class="card-title p-4 mb-2 bg-primary text-white text-center">${Manager.name}</h4>
    <h4 class="card-title">Manager</h4>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${Manager.id}</li>
    <li class="list-group-item">Email: ${Manager.email}</li>
    <li class="list-group-item">Office Number: ${Manager.officeNumber}</li>
  </ul>
  </div>
</div>
            `
    }


    // create a function that returns the intern cards
    function returnIntern(Intern) {
        return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h4 class="card-title p-4 mb-2 bg-primary text-white text-center">${Intern.name}</h4>
    <h4 class="card-title">Intern</h4>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${Intern.id}</li>
    <li class="list-group-item">Email: ${Intern.email}</li>
    <li class="list-group-item">School ${Intern.getSchool()}</li>
  </ul>
  </div>
</div>
            `
    }
    // create a function that returns the engineer cards
    function returnEngineer(Engineer) {
        return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h4 class="card-title p-4 mb-2 bg-primary text-white text-center">${Engineer.name}</h4>
    <h4 class="card-title">Engineer</h4>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${Engineer.id}</li>
    <li class="list-group-item">Email: ${Engineer.email}</li>
    <li class="list-group-item">Github Username: ${Engineer.getGitHub()}</li>
  </ul>
  </div>
</div>`
    }
    return teamArray;
}

module.exports = (members) => {
    return `
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>

<body>
    <header class="p-4 mb-2 bg-danger text-white text-center">
        <h2>My Team</h2>
    </header>
    <main>
        <div class="d-flex flex-wrap justify-content-evenly" id="card-container">
        ${filterTeam(members).toString()}
        </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"></script>
</body>

</html>
    `;
}