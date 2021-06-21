import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 5)
      ]

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    addManyIngredients(ingredients: Ingredient[]) {
        for (let index = 0; index < ingredients.length; index++) {
            this.addIngredient(ingredients[index])    
        }
    }
    
}