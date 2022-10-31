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

class Menu {
  constructor() {
    this.recipes = [];
    this.selectedRecipe = null;
  }

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case '1':
          this.createRecipe();
          break;
        case '2':
          this.viewRecipe();
          break;
        case '3':
          this.deleteRecipe();
          break;
        case '4':
          this.displayRecipes();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }

    alert('Goodbye');
  }
  showMainMenuOptions() {
    return prompt(`
            0) Exit
            1) Create New Recipe
            2) View Recipe
            3) Delete Recipe
            4) Display All Recipes
        `);
  }
}

let menu = new Menu();
menu.start();
