 // Verifica se o carrinho existe no armazenamento local
 let carrinho = localStorage.getItem("carrinho");

 if (carrinho) {
   // Converte o carrinho de texto para um objeto
   carrinho = JSON.parse(carrinho);
   // Obtém a div onde os produtos serão exibidos
   let divProdutos = document.getElementById("produtos");
   // Itera sobre os produtos do carrinho e exibe-os na página
   carrinho.forEach(function (produto) {
     let nomeProduto = produto.nome;
     let precoProduto = produto.preco;
     let divProduto = document.createElement("div");
     divProduto.innerHTML = nomeProduto + " - R$" + precoProduto.toFixed(2);
     divProdutos.appendChild(divProduto);
   });

   let valorTotal = 0;
   carrinho.forEach(function (produto) {
     valorTotal += produto.preco;
   });

   document.querySelector('.labelpagamento').textContent = "Valor total: R$" + valorTotal.toFixed(2);
 } else {

 }

// Código para Finalizar a Compra dos Produtos
function finalizarCompra() {
 let carrinho = localStorage.getItem("carrinho");
 if (carrinho) {
   carrinho = JSON.parse(carrinho);

   let valorTotal = 0;

   carrinho.forEach(function (produto) {
     valorTotal += produto.preco;
   });

   let produtosComprados = carrinho.map(function (produto) {
     return produto.nome + " - R$" + produto.preco.toFixed(2);
   }).join("\n");

   Swal.fire(
     'Compra efetuada com sucesso!',
     "Valor total da compra: R$" + valorTotal.toFixed(2) + "\n\nProdutos comprados:\n" + produtosComprados,
     'success'
   )

   // Remover as informações do carrinho do armazenamento local
   localStorage.removeItem("carrinho");

   // Limpar a exibição dos produtos na página
   let divProdutos = document.getElementById("produtos");
   divProdutos.innerHTML = "";

   // Limpar o valor total na página
   document.querySelector('.labelpagamento').textContent = "";

 } else {

   Swal.fire({
     icon: 'error',
     title: 'Oops...',
     text: "Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.",
   })
 }
}

function ContinuarComrprando() {
 window.location.href = 'principallogado.html'
}