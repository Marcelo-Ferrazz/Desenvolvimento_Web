// remove() remove elemento DOM
// insertBefore() permite recuperar um elemento removido
// nextSibling retorna a proxima posição a patir de um elemento

// Remove elemento do DOM
let item2 = document.getElementById("item2");
item2.remove();
// Retornando o elemento
let lista = document.getElementById("items");
let item1 = document.getElementById("item1");
lista.insertBefore(item2, item1.nextSibling);
