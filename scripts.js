const botao = document.querySelector('.task-button');
const input = document.querySelector('.task-input');
const listaCompleta = document.querySelector('.task-list');


let listaItens = [];


function adicionarItensLista() {
    // console.log(input.value);  
    if(!input.value.trim()){
        return '';
    }
    listaItens.push({
        novoItem: input.value,
        concluida: false
        }
    );
    input.value = '';
    // console.log(listaItens);  
    mostrarLista();

}

function mostrarLista() {

    let lista = '';   //inicia lista vazia

    listaItens.forEach((item, index) => {

        lista = lista + ` 
        
        <li class="task ${item.concluida && "feito"}">
         <img src="/img/check.png" alt="check-item-realizada" onclick="concluirItem(${index})">
         <p> ${item.novoItem}</p>
         <img src="/img/trash-bin.png" alt="excluir-item" onclick="excluirItem(${index})">
        </li>
        
        ` 
        // console.log(input.value);
    });

    listaCompleta.innerHTML = lista;  

    localStorage.setItem('itens',JSON.stringify(listaItens));
}

function concluirItem(index){

    // console.log(index);
    listaItens[index].concluida = !listaItens[index].concluida;
    mostrarLista();
}

function excluirItem (index){    
    
    listaItens.splice(index,1);
    mostrarLista();
}

function recarregarItens(){

    const itensLocalStorage = localStorage.getItem('itens');

    if(itensLocalStorage){
        
        listaItens = JSON.parse(itensLocalStorage);
    }

    mostrarLista();
}

recarregarItens();
botao.addEventListener('click', adicionarItensLista);
