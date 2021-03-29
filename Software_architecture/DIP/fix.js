
class CoffeeShop{
    constructor(paymentMethod){
        this.paymentMethod = paymentMethod
    }
    buyCoffee(quantity){
        this.paymentMethod.pay(quantity * 30000);
    }
    buyTea(quantity){
        this.paymentMethod.pay(quantity * 35000);
    }
}

class PaymentMethod{
    constructor(customer){
        this.pay_by_card = new PayByCard(customer)
    }
    pay(money){
        this.pay_by_card.makePayment(money)
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

const coffeeshop = new CoffeeShop(new PaymentMethod("Laren"))
coffeeshop.buyCoffee(3);
coffeeshop.buyTea(2);
