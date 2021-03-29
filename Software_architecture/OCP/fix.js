

class Laptop {
    constructor(name) {
        this.name = name;
    }
    getname(){}
}

class Asus extends Laptop {
    getname() {
        console.log("This is " + this.name);
    }
}
class Dell extends Laptop {
    getname() {
        console.log("This is " + this.name);
    }
}
class Macbook extends Laptop {
    getname() {
        console.log("This is " + this.name);
    }
}

function printLaptop(laptops)
{
    laptops.forEach(laptop =>{
        console.log(laptop.name)
        laptop.getname()
        console.log(' ')
    })
}
const laptops =[
    new Asus("Asus"),
    new Dell("Dell"),
    new Macbook("Macbook")
]

printLaptop(laptops);