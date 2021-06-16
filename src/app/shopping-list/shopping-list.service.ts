import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 5)
      ]

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
    
}