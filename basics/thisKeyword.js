// this keyword is used to reference the parent object

const obj = {
    price: 1,
    price2: 2,
    price3: 3,
    addAllPrices() {
        return this.price + this.price2 + this.price3;
    }
}

console.log(obj.addAllPrices())