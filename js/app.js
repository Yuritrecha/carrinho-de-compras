// inicia uma variável com o valor total do carrinho em 0.
let valorTotalGeral = 0;

function adicionar(){

// recupera os valores de produto, quantidade e valor.
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let valor = quantidade * valorUnitario;

    // Adiciona quantidade do produto, nome do produto e valor do produto ao carrinho
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${valor}</span>
    </section>`

    // Atualiza o valor total
    let valorTotal = document.getElementById('valor-total');
    valorTotal.innerHTML +=`<p class="carrinho__total">
    <span class="texto-azul" id="valor-total">R$${valor}</span>
    </p>`

    // soma o valor total geral do carrinho
    valorTotalGeral = valorTotalGeral + valor;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotalGeral}`;
}

function limpar(){
    
    limparCarrinho = document.getElementById ('lista-produtos');
    limparCarrinho.innerHTML = `<section class="carrinho__produtos__produto">
    <span class="texto-azul"></span><span class="texto-azul"></span>
    </section>`
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = "";
    valorTotalGeral = null
}