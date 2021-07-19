class Pessoa {
    constructor() {
        this.idade = 0
        const self = this
        setInterval(() => {
            console.log(self.idade)
            self.idade++
        } /*.bind(this)*/, 1000)


    }
}

new Pessoa
