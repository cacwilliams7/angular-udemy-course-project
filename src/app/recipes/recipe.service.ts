import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4rxJQFzniWXjnAXc6pWmEqKtJnB_GN4Fnw&usqp=CAU',[
            new Ingredient('One',1),
            new Ingredient('Two', 2)
        ]),
        new Recipe('A Test Recipe2', 'This is a test2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4rxJQFzniWXjnAXc6pWmEqKtJnB_GN4Fnw&usqp=CAU',[
            new Ingredient('Three',3),
            new Ingredient('Four', 4)
        ]),
      ]
    public recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice()
    }

    
}