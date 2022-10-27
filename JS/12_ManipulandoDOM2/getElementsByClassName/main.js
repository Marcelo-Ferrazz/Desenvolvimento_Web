// Método getElementById
let titulo = document.getElementById("titulo");
// Alterando o conteúdo do elemento
titulo.innerHTML = "Olá meus caros alunos!";
// Configurando o estilo CSS do elemento
titulo.style.textAlign = "center";
titulo.style.backgroundColor = "#CCCCC9";
titulo.style.borderBottom = "solid 3px #000";
titulo.style.margin = "20px";
titulo.style.padding = "20px 0";
titulo.style.fontSize = "2em";
//acima aula anterior

// Método getElementsByClassName
let items = document.getElementsByClassName("item");
items[1].textContent = "Hello 2";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";
