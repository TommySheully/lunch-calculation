import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { receiptsType, RecipesReduserType, coefficient, calculation, recipeType } from 'common'
import { AppRootStateType } from 'app'


const initialState: RecipesReduserType = { recipes: [], persons: 100 }

export const updatePersonsTC = createAsyncThunk('recipes/updatePersonsTC', async (newPersons: number, { dispatch, getState }) => {
  const { recipes } = getState() as AppRootStateType
  const coefficientValue = coefficient({ newPersons, persons: recipes.persons })
  for (let element of recipes.recipes) {
    const recipe = calculation({ element, coefficientValue })
    dispatch(updateRecipeAC({ recipe }))
  }
  dispatch(updatePersonsAC({ newPersons }))
})

export const updatePersonsForRecipeTC = createAsyncThunk('recipes/updatePersonsForRecipeTC', async (data: {
  recipe: receiptsType,
  newPersons: number
}, { dispatch }) => {
  const { recipe, newPersons } = data
  const coefficientValue = coefficient({ newPersons, persons: recipe.value })
  const newRecipe = calculation({ element: recipe, coefficientValue })
  dispatch(updateRecipeAC({ recipe: newRecipe }))
})

export const updateIngredientsRecipeTC = createAsyncThunk('recipes/updateIngredientsRecipeTC', async (data: {
  newValue: string, id: string, recipe: receiptsType
}, { dispatch }) => {
  const {recipe, id, newValue} = data
  const newRecipe = { ...recipe,
    ingredients: recipe.ingredients.map((el) => el.id === id
      ? { ...el, value: Number(newValue) }
      : {...el}) }
  dispatch(updateRecipeAC({ recipe: newRecipe }))
})

const slice = createSlice({
  name: 'recipes',
  initialState: initialState,
  reducers: {
    updatePersonsAC(state, action: PayloadAction<{ newPersons: number }>) {
      state.persons = action.payload.newPersons
    },
    addRecipeAC(state, action: PayloadAction<{ recipe: receiptsType }>) {
      state.recipes.push(action.payload.recipe)
    },
    clearRecipeAC(state) {
      state.recipes = []
      state.persons = 100
    },
    updateRecipeAC(state, action: PayloadAction<{ recipe: receiptsType }>) {
      const index = state.recipes.findIndex(el => el.id === action.payload.recipe.id)
      state.recipes[index] = action.payload.recipe
    },
    removeRecipeAC(state, action: PayloadAction<{ id: string }>) {
      const index = state.recipes.findIndex(el => el.id === action.payload.id)
      state.recipes.splice(index, 1)
    },
    addIngredientAC(state, action: PayloadAction<{ id: string, ingredient: recipeType }>) {
      const index = state.recipes.findIndex(el => el.id === action.payload.id)
      state.recipes[index].ingredients.push(action.payload.ingredient)
    },
    removeIngredientAC(state, action: PayloadAction<{ recipeId: string, ingredientId: string }>) {
      const indexRecepe = state.recipes.findIndex(el => el.id === action.payload.recipeId)
      const indexIngr = state.recipes[indexRecepe].ingredients.findIndex(el => el.id === action.payload.ingredientId)
      state.recipes[indexRecepe].ingredients.splice(indexIngr, 1)
    },
  }
})

export const recipesReducer = slice.reducer
export const { addRecipeAC, updateRecipeAC, removeRecipeAC, updatePersonsAC, addIngredientAC, removeIngredientAC, clearRecipeAC } = slice.actions
