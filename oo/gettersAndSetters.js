const sequencia = {
    _valor: 1, //convenção para mostrar que variable é privada

    get valor() {
        return this._valor++ 
    },
    set valor(valor) {
        this._valor = valor
    }

}

console.log(sequencia.valor)
