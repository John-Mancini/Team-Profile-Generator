function renderHtml(employees) {
  let hmtl = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
        <title>Document</title>
      </head>
      <body>
      <header>My Crew</header>
      <div class="card" style="width: 18rem;">
      <div class="card-header bg-primary text-white">
          <h2 class="card-title text-center">${employees[0].name}</h2>
          <h3 class="card-subtitle mb-2  text-center text-muted">Manager</h3>
          </div>
          <div class="card-body bg-light text-white">
          <ul class="list-group">
            <li class="list-group-item">${employees[0].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employees[0].email}">${employees[0].email}</a></li>
            <li class="list-group-item">${employees[0].officeNumber}</li>
          </ul>
          </div>
        </div>`;
  for (const employee of employees) {
    if (employee.getRole() === "Engineer") {
      html += `
<div class="card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title text-center">${employee.name}</h2>
            <h3 class="card-subtitle mb-2  text-center text-muted">${employee.role}</h3>
        </div>
    <div class="card-body bg-light text-white">
         <ul class="list-group">
         <li class="list-group-item">${employee.id}</li>
         <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
         <li class="list-group-item">${employee.github}</li>
        </ul>
    </div>
</div>
              `;
    }
  }

  for (const employee of employees) {
    if (employee.getRole() === "Intern") {
      html += `<div class="card" style="width: 18rem;">
      <div class="card-header bg-primary text-white">
          <h2 class="card-title text-center">${employee.name}</h2>
          <h3 class="card-subtitle mb-2  text-center text-muted">${employee.role}</h3>
      </div>
  <div class="card-body bg-light text-white">
       <ul class="list-group">
       <li class="list-group-item">${employee.id}</li>
       <li class="list-group-item list-group-item-action email">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
       <li class="list-group-item">${employee.school}</li>
      </ul>
  </div>
</div>
           `;
    }
  }
}

module.exports = renderHtml;
