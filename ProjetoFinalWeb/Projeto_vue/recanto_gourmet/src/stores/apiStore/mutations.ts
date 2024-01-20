import state from "./state";  
  
export function setSearchedMeals(state: { searchedMeals: any[]; }, meals: any[]): void {
    state.searchedMeals = meals || [];
  }
  
  export function setMealsByLetter(state: { mealsByLetter: any[]; }, meals: any[]): void {
    state.mealsByLetter = meals || [];
  }
  
  export function setMealsByIngredients(state: { mealsByIngredient: any[]; }, meals: any[]): void {
    state.mealsByIngredient = meals || [];
  }
  
  export function setIngredient(state: { ingredient: any; }, ingredient: any): void {
    state.ingredient = ingredient;
  }
  