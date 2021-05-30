function renderHtml(employees) {
  let hmtl = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
      <header>My Crew</header>
      <div class="cardBodies">
        <div class="managerCard">
          <h1>${employees[0].name}</h1>
          <h2>Manager</h2>
          <ul>
            <li class="ID"></li>
            <li class="email">Email: <a href="mailto:${employees[0].email}">${employees[0].email}</a></li>
            <li class="officeNumber">${employees[0].officeNumber}</li>
          </ul>
        </div>`;
  for (const employee of employees) {
    if (employee.getRole() === "Engineer") {
      html += `<div class="engineerCard">
                <h1>${employee.name}</h1>
                <h2>Engineer</h2>
                <ul>
                  <li class="ID"></li>
                  <li class="email">Email: <a href="mailto:"></a></li>
                  <li class="gitHub"></li>
                </ul>
              </div>`;
    }
  }

  for (const employee of employees) {
    if (employee.getRole() === "Intern") {
      html += `<div class="internCard">
                <h1>${employee.name}</h1>
                <h2>Title goes here</h2>
                <ul>
                  <li class="ID"></li>
                  <li class="email">Email: <a href="mailto:"></a></li>
                  <li class="school"></li>
                </ul>
              </div>
            </div>
            </body>
            </html>`;
    }
  }
}
