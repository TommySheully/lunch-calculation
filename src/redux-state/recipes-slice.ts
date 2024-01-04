import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { receiptsType, RecipesReduserType, calculation, recipeType } from 'common'
import { AppRootStateType } from 'app'

const initialState: RecipesReduserType = { recipes: [], persons: 100 }

export const updatePersonsTC = createAsyncThunk('recipes/updatePersonsTC', async (n: number, { dispatch, getState }) => {
    const { recipes } = getState() as AppRootStateType
    for (const element of recipes.recipes) {
      dispatch(updateRecipeAC({ recipe: calculation(element, n / recipes.persons) }))
    }
    dispatch(updatePersonsAC({ newPersons: n }))
  }
)

export const updatePersonsForRecipeTC = createAsyncThunk(
  'recipes/updatePersonsForRecipeTC',
  async (data: { recipe: receiptsType, newPersons: number }, { dispatch }
  ) => {
    const { recipe, newPersons } = data
    dispatch(updateRecipeAC({ recipe: calculation(recipe, newPersons / recipe.value) }))
  }
)

export const updateIngredientsRecipeTC = createAsyncThunk(
  'recipes/updateIngredientsRecipeTC',
  async (data: { newValue: string, id: string, recipe: receiptsType }, { dispatch }
  ) => {
    const { recipe, id, newValue } = data
    const newRecipe = {
      ...recipe,
      ingredients: recipe.ingredients.map((el) => (el.id === id ? { ...el, value: Number(newValue) } : { ...el }))
    }
    dispatch(updateRecipeAC({ recipe: newRecipe }))
  }
)

const slice = createSlice({
  name: 'recipes',
  initialState: initialState,
  reducers: {
    updatePersonsAC(state, action: PayloadAction<{ newPersons: number }>) {
      state.persons = action.payload.newPersons
    },
    updateExcludeAC(state, action: PayloadAction<{ value: boolean, recipeId: string, ingredientId: string }>) {
      state.recipes = state.recipes.map((el) => el.id === action.payload.recipeId
        ? { ...el, ingredients: el.ingredients.map(ing => ing.id === action.payload.ingredientId ? {...ing, exclude: action.payload.value  } : ing) }
        : el)
    },
    addRecipeAC(state, action: PayloadAction<{ recipe: receiptsType }>) {
      state.recipes.push(action.payload.recipe)
    },
    clearRecipeAC(state) {
      state.recipes = []
      state.persons = 100
    },
    updateRecipeAC(state, action: PayloadAction<{ recipe: receiptsType }>) {
      state.recipes = state.recipes.map((el) => (el.id === action.payload.recipe.id ? action.payload.recipe : el))
    },
    removeRecipeAC(state, action: PayloadAction<{ id: string }>) {
      state.recipes = state.recipes.filter((el) => el.id !== action.payload.id)
    },
    addIngredientAC(state, action: PayloadAction<{ id: string; ingredient: recipeType }>) {
      state.recipes = state.recipes.map((el) => el.id === action.payload.id ? { ...el, ingredients: [...el.ingredients, action.payload.ingredient] } : el)

    },
    removeIngredientAC(state, action: PayloadAction<{ recipeId: string, ingredientId: string }>) {
      state.recipes = state.recipes.map((el) => el.id === action.payload.recipeId
        ? { ...el, ingredients: el.ingredients.filter(ing => ing.id !== action.payload.ingredientId) }
        : el)
    }
  }
})

export const recipesReducer = slice.reducer
export const { addRecipeAC, updateRecipeAC, removeRecipeAC, updatePersonsAC, addIngredientAC, removeIngredientAC, clearRecipeAC, updateExcludeAC } = slice.actions
