
const generateManagers = managers => {
    if (managers.length === 0) {
        return '';
    } else {
        return `
        ${managers.map(({ name, id, email, roleInfo }) => {
            return `
            <div class="col-lg-3.5 card m-2" style="width: 18rem;">
            <div class="card-header">
                <h3>${name}</h3>
                <h4><i class="fas fa-clipboard-list"></i> Manager</h4>
            </div>
            <div class="list">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Office Number: <a href="tel:${roleInfo}">${roleInfo}</a></li>
                </ul>
            </div>
            </div> 

            `;
        }).join('')}`;
    }
};

const generateEngineers = engineers => {
    if (engineers.length === 0) {
        return '';
    } else {
        return `
        ${engineers.map(({ name, id, email, roleInfo }) => {
            return `
            <div class="col-lg-3.5 card m-2" style="width: 18rem;">
            <div class="card-header">
                <h3>${name}</h3>
                <h4><i class="fas fa-cogs"></i> Engineer</h4>
            </div>
            <div class="list">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${roleInfo}" target="_blank">${roleInfo}</a></li>
                </ul>
            </div>
            </div>

            `;
        }).join('')}`;
    }
};

const generateInterns = interns => {
    if (interns.length === 0){
        return '';
    } else {
        return `
        ${interns.map(({ name, id, email, roleInfo }) => {
            return `
            <div class="col-lg-3.5 card m-2" style="width: 18rem;">
            <div class="card-header">
                <h3>${name}</h3>
                <h4><i class="fas fa-graduation-cap"></i> Intern</h4>
            </div>
            <div class="list">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">School: ${roleInfo}</li>
                </ul>
            </div>
            </div> 

            `;
        }).join('')}`;
    }
};

module.exports = (data1, data2, data3) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team-Cards</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;1,500;1,700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
    <header class='col-11 text-white'>My Team</header>

    <div class="d-flex justify-content-around flex-wrap m-auto p-5">
    ${generateManagers(data1)}
    ${generateEngineers(data2)}
    ${generateInterns(data3)}

    <script src="https://kit.fontawesome.com/4052861372.js" crossorigin="anonymous"></script>
    </body>
    </html>
    `
};

