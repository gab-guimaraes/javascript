//usando notacao literal
const obj1 = {}

console.log(obj1)

//criar object com new 
console.log(typeof Object)

const obj2 = new Object
console.log(obj2)

//construtor

function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 9, 0.24)

console.log(p1)