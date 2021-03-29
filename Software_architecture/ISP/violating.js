class Military {
    constructor(name, attackDamage, signal) {
        this.name = name;
        this.attackDamage = attackDamage;
        this.signal = signal;
    }
    move() {
        console.log(`${this.name} moving...`);
    }
    attack(enemy) {
        console.log(`${this.name} attacking ${enemy.name} for ${this.attackDamage} damage`);
    }
    report() {
        console.log(`${this.name} reported that ${this.signal}`);
    }


}
class Warrior extends Military { }

class Tank extends Military {
    report() {
        return null;
        //Tank can't report
    }
}
class Barrier extends Military {
    report() {
        return null;
        //Barrier can't report.
    }
    move() {
        return null;
        //Barrier can't move.
    }
}
const warrior = new Warrior("John", 34, "Yes Sir");
warrior.move();
warrior.report();
warrior.attack(Tank);