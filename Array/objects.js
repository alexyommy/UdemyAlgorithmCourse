class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log("Hi I am ${this.name}, Im from ${this.type}");
    }
}

class Wizard extends Player{
    constructor(name, type) {
        super(name, type);
        console.log('wizard', this);
    }
    play() {
        console.log("Eskeeeetiitt I'm a ${this.type}");
    }
}

const Harry = new Wizard('Harry', 'Hogwarts');
const Ron = new Wizard('Ron', 'Hogwarts');

Harry.play+();

