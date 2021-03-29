

class CoffeeShop {
    constructor(customer) {
        this.pay_by_card = new PayByCard(customer)
    }
    buyCoffee(quantity) {
        this.pay_by_card.makePayment(quantity * 30000)
    }
    buyTea(quantity){
        this.pay_by_card.makePayment(quantity * 35000)
    }
}

class PayByCard {
    constructor(customer) {
        this.customer = customer;
    }
    makePayment(money) {
        console.log(`${this.customer} paid ${money} by card`);
    }
}

const coffeeshop = new CoffeeShop("Laren");
coffeeshop.buyCoffee(3);
coffeeshop.buyTea(2);
//if we change the payment method we have to change the structure of class CoffeeShop.
