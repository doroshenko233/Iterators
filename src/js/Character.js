export default class Character {
    constructor(name, type) {
        const heroes = [
            'Bowerman',
            'Swordsman',
            'Magician',
        ]

        if (heroes.includes(type)) {
            this.type = type; 
        } else {
            throw new Error('Такого героя не существует!');
          }

        this.name = name; 
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }
}


export class Swordsman extends Character{
    constructor(name) {
        super(name, 'Swordsman');
        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character{
    constructor(name) {
        super(name, 'Magician');
        this.attack = 10;
        this.defence = 40;
    }
}

export class Bowerman extends Character {
    constructor(name) {
        super(name, 'Bowerman');
        this.attack = 25;
        this.defence = 25;
    }
}