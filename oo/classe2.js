class Obra {
    constructor(nome) {
        this.nome = nome
    }

}

class Musica extends Obra {
    constructor(nome, artista) {
        super(nome)
        this.artista = artista
    }
}

musica = new Musica('Here without u', '3 Doors Down')

console.log(musica)