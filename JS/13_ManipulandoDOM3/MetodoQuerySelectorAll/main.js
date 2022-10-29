var listaLi = document.querySelectorAll('li');
for(i = 0; i < listaLi.length; i++){
    listaLi[i].style.border = '1px solid #00F'
    listaLi[i].style.padding = '3px'
}

// acessando o array de li utilizando apenas o ID
var myLi = document.querySelectorAll('#my-li');
myLi.forEach((li) => (li.innerHTML = 'Mudou aqui'));
