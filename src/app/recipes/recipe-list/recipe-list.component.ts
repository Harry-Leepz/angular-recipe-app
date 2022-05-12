import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'The recipe is for testing only',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=556,505'
    ),
    new Recipe(
      'A test recipe',
      'The recipe is for testing only',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=556,505'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
