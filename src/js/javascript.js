var prods = [
    {id : 1, name : "Bife com batata", price : 30.00},
    {id : 2, name : "Coxa de Frango Crocante", price : 25.00},
    {id : 3, name : "Carne de Panela", price : 22.00},
    {id : 4, name : "Farofa", price : 10.00},
    {id : 5, name : "Salada", price : 8.00},
    {id : 6, name : "Torresmo", price : 12.00},
];

function calc(){
    var quantities = document.getElementsByName("quantity");
    var output     = document.getElementById("output");
    var title      = document.getElementById("title");
    var total      = 0;
    var name       = document.getElementById("name").value;
    
    output.innerHTML = "";
    title.innerHTML = " ";

        var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    
    

    title.innerHTML += `<h4><strong>Caro ${name}</strong></h4>`;
    output.innerHTML += `<p>Seguem os dados do seu pedido.</p>`;
    output.innerHTML += `<p>O seu pedido é:</p>`;
    output.innerHTML += `<ul>`;
    
    for (var input of quantities){
        var id = input.id;

        if (input.value > 0) {
            output.innerHTML += `<li>Prato: ${prods[id-1].name}  - Preço Unitário: ${formatter.format(prods[id-1].price)} - 
                                    Quantidade: ${input.value} - Total : ${formatter.format(input.value * prods[id-1].price)} </li>`;
            total            += prods[id-1].price * parseFloat(input.value);
        }

    }

    output.innerHTML += `<br>`;
    output.innerHTML += `<h5><strong>Preço Final: ${formatter.format(total)}</strong></h5>`;
 
}
