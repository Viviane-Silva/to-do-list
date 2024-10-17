const botao = document.querySelector('.task-button');
const input = document.querySelector('.task-input');
const listaCompleta = document.querySelector('.task-list');


let listaItens = [];


function adicionarItensLista() {
    // console.log(input.value);  
    listaItens.push(input.value);
    input.value = '';
    // console.log(listaItens);  

    mostrarLista();

}

function mostrarLista() {

    let lista = '';   //inicia lista vazia

    listaItens.forEach(item => {

        lista = lista + ` 
        
        <li class="task">
         <img src="/img/check.png" alt="check-tarefa-realizada">
         <p> ${item}</p>
         <img src="/img/trash-bin.png" alt="excluir-tarefa">
        </li>
        
        ` 
        // console.log(input.value);
    });

    listaCompleta.innerHTML = lista;  
}

botao.addEventListener('click', adicionarItensLista);
