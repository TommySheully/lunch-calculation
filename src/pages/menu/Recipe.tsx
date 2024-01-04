import React from 'react'
import { Paper } from '@mui/material'
import { EditableSpan, ModalAddIngredients, receiptsType, recipeType } from 'common'
import styled from 'styled-components'
import { useAppDispatch } from 'app'
import { DeleteIcon } from 'assets'
import { addIngredientAC, removeIngredientAC, removeRecipeAC, updateExcludeAC, updateIngredientsRecipeTC, updatePersonsForRecipeTC } from 'redux-state'
import { Ingredient } from 'pages'

type PropsType = { recipe: receiptsType }

export const Recipe = ({ recipe }: PropsType) => {
  const dispatch = useAppDispatch()
  const handleUpDatePersonRecipe = (newValue: string) => dispatch(updatePersonsForRecipeTC({ recipe, newPersons: Number(newValue) }))
  const handleUpDateRecipe = (newValue: string, id: string) => dispatch(updateIngredientsRecipeTC({ newValue, id, recipe }))
  const handleRemoveRecipe = () => dispatch(removeRecipeAC({ id: recipe.id }))
  const handleAddIngredient = (ingredient: recipeType) => dispatch(addIngredientAC({ id: recipe.id, ingredient }))
  const handleRemoveIngredient = (id: string) => dispatch(removeIngredientAC({ recipeId: recipe.id, ingredientId: id }))
  const handleUpdateExclude  = (value: boolean, id: string) => dispatch(updateExcludeAC({ value,recipeId: recipe.id, ingredientId: id }))
  return (
    <Paper sx={style}>
      <HeaderComponent>
        <LeftHeaderComponent>
          <h2>{recipe.title}</h2>
          <img style={{ margin: '8px' }} width={24} height={24} src={DeleteIcon} alt="Delete recepe icon"
               onClick={handleRemoveRecipe}/>
          <ModalAddIngredients addIngredientCallback={handleAddIngredient}/>
        </LeftHeaderComponent>
        <EditableSpan value={recipe.value.toString()} onChange={handleUpDatePersonRecipe}/>
      </HeaderComponent>
      <IngredientsContainer>
        {recipe.ingredients.map((el) => <Ingredient key={el.id}
                                                    state={{ ingredient: el.ingredient, value: el.value, measurement: el.measurement, id: el.id, exclude: el.exclude }}
                                                    updateExclude={handleUpdateExclude}
                                                    onUpdate={handleUpDateRecipe}
                                                    removeIngredient={handleRemoveIngredient}/>)}
        <h4 style={{ padding: '3px', margin: '2px' }}>
          {recipe.description}
        </h4>
      </IngredientsContainer>
    </Paper>
  )
}

const style = { width: '60%', height: '100%', margin: '5px 0', padding: '0 15px' }

const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const LeftHeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
