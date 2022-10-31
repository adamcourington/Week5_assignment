class Ingredients {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  describe() {
    return `${this.name} costs ${this.price} dollars.`;
  }
}
