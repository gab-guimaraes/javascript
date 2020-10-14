const produto = new Object
produto.nome = 'cadeira'
produto.preco = 4000

console.log(produto)

delete produto.preco
delete produto.marca

const carro = {
    modelo: 'a4',
    valor: 89000,
    proprietario: {
        nome: 'joao',
        idade: 34
    }
}

console.log(carro)