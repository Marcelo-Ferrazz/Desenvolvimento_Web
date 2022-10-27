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
//acima aula anterior

// Método getElementsByTagName
let li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
  if (i % 2) li[i].style.backgroundColor = "#f4f4f4";
  else li[i].style.backgroundColor = "#fff";
}
//acima aula anterior

// Método getElementsByName
let nome = document.getElementsByName("fitem");
nome[0].textContent = "Olá pessoas";
nome[0].style.backgroundColor = "yellow";
nome[1].textContent = "Tudo bem?";
nome[1].style.backgroundColor = "#BAC1FB";
nome[0].style.listStyle = "none"