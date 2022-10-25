// JavaScript e DOM
// objeto document
console.log(document);

// Acessar informações
console.clear();
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

console.clear();
// Alterar o título
document.title = 123;
// Criar um elemento <h1>
let heading = document.createElement("H1");
heading.innerHTML = "Olá alunos!";
document.body.appendChild(heading);
heading.style.borderBottom = "solid 3px #000";

var button = document.createElement("BUTTON")
button.innerHTML = "Olá alunos!";
document.body.appendChild(button);
button.style.padding = "25px";
button.style.marginLeft = "50%";    
button.style.borderRadius = "25px";
