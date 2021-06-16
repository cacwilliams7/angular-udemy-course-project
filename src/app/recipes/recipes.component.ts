import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Output() 
  selectedRecipe: Recipe;

  constructor(private recipeSelected: RecipeService) { }

  ngOnInit(): void {
    this.recipeSelected.recipeSelected
    .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }


    )
  }

}
