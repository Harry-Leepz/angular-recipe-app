import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Fish and Chips',
      'This is a description of Fish and Chips',
      'https://www.thespruceeats.com/thmb/-Hq2aVGdlH43SB1R-A7UK2dCb6k=/1500x844/smart/filters:no_upscale()/best-fish-and-chips-recipe-434856-Hero-5b61b89346e0fb00500f2141.jpg'
    ),
    new Recipe(
      'Aloo Parothe',
      'This is description on Aloo Parothe',
      'https://static.toiimg.com/thumb/53109843.cms?imgsize=244340&width=800&height=800'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
