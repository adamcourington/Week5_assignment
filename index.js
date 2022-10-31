class Ingredient {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  describe() {
    return `${this.name} costs ${this.price} dollars.`;
  }
}

class Recipe {
  constructor(name) {
    this.name = name;
    this.ingredients = [];
  }
  addIngredient(ingredient) {
    if (ingredient instanceof Ingredient) {
      this.ingredients.push(ingredient);
    } else {
      throw new Error(
        `You can only add an instance of Ingredient.  Argument in not an ingredient: ${ingredient}`
      );
    }
  }
  describe() {
    return `${this.name} has ${this.ingredients.length} ingredients.`;
  }
}
