import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
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


    constructor(private shoppingService: ShoppingListService) {


    }

    public recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice()
    }

    toShoppingList(ingredients: Ingredient[]) {
        this.shoppingService.addManyIngredients(ingredients)

    }

    getRecipe(id: number) {
        return this.recipes[id]
    }

    
}