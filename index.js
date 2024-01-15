class hero {
    constructor (name, type, age, attack){
        this.name = name;
        this.type = type;
        this.age = age;
        this.attack = attack;
    }

    atacar(){
        console.log (`O ${this.type} ${this.name} de ${this.age} anos, atacou usando ${this.attack}.`);
    }
}

let mago = new hero ("Gandalf", "mago", 70, "magia")

let guerreiro = new hero ("Arthur", "guerreiro", 25, "espada")

let monge = new hero ("Xiaolin", "monge", 30, "artes marciais")

let ninja = new hero ("Naruto", "ninja", 20, "shuriken")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()