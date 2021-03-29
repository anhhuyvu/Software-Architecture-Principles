class Military{
    constructor(name){
        this.name = name;
    }
}

const mover = {
    move(){
        console.log(`${this.name} moving`);
    }
}
const attacker = {
    attack(enemy)
    {
        console.log(`${this.name} attacking ${enemy.name} for ${this.attackDamage} damage`);
    }
}
const reporter = {
    report(){
        console.log(`${this.name} reported that ${this.signal}`);
    }
}
class Warrior extends Military{
    constructor(name,attackDamage,signal){
        super(name);
        this.attackDamage = attackDamage;
        this.signal = signal;
    }
}

Object.assign(Warrior.prototype,mover);
Object.assign(Warrior.prototype,attacker);
Object.assign(Warrior.prototype,reporter);

class Tank extends Military{
    constructor(name,attackDamage)
    {
        super(name);
        this.name = name;
        this.attackDamage = attackDamage;
    }
}
Object.assign(Tank.prototype,mover);
Object.assign(Tank.prototype,attacker);

class Barrier extends Military{
    constructor(name){
        super(name);
        this.name = name;
    }
}

const warrior = new Warrior("John",34,"Boom");
const tank = new Tank("Echo_2",45);
const barrier = new Barrier("Block A");

warrior.move();
warrior.attack(barrier);
warrior.report();

tank.move();
tank.attack(warrior);
