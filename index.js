class Ingredient {
  constructor(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
}

class Recipe {
  constructor(name) {
    this.name = name;
    this.ingredients = [];
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

  showRecipeMenuOptions(recipeInfo) {
    return prompt(`
        0) Back
        1) Create Ingredient
        2) Delete Ingredient
        ------------------
        ${recipeInfo}
    `);
  }
  displayRecipes() {
    let recipeString = '';
    for (let i = 0; i < this.recipes.length; i++) {
      recipeString += i + ')' + this.recipes[i].name + '\n';
    }
    alert(recipeString);
  }
  createRecipe() {
    let name = prompt('Enter the name of a new recipe:');
    this.recipes.push(new Recipe(name));
  }
  viewRecipe() {
    let index = prompt('Enter the index of the recipe you wish to view:');
    if (index > -1 && index < this.recipes.length) {
      this.selectedRecipe = this.recipes[index];
      let description = 'Recipe: ' + this.selectedRecipe.name + '\n';

      for (let i = 0; i < this.selectedRecipe.ingredients.length; i++) {
        description +=
          i +
          ') ' +
          this.selectedRecipe.ingredients[i].quantity +
          ' - ' +
          this.selectedRecipe.ingredients[i].name +
          ' | ' +
          this.selectedRecipe.ingredients[i].price +
          '\n';
      }
      let selection = this.showRecipeMenuOptions(description);
      switch (selection) {
        case '1':
          this.createIngredient();
          break;
        case '2':
          this.deleteIngredient();
      }
    }
  }
  deleteRecipe() {
    let index = prompt('Enter the index of the recipie you wish to delete:');
    if (index > -1 && index < this.recipes.length) {
      this.recipes.splice(index, 1);
    }
  }
  createIngredient() {
    let name = prompt('Enter name of the new ingredient:');
    let quantity = prompt('Enter the quanty of the ingredient:');
    let price = prompt('Enter the price of the ingredient:');
    this.selectedRecipe.ingredients.push(new Ingredient(name, quantity, price));
  }

  deleteIngredient() {
    let index = prompt('Enter the index of the ingredient you wish to delete:');
    if (index > -1 && index < this.selectedRecipe.ingredients.length) {
      this.selectedRecipe.ingredients.splice(index, 1);
    }
  }
}
let menu = new Menu();
menu.start();
