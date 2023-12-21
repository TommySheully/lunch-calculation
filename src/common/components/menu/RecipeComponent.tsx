import React from 'react'
import { Paper } from '@mui/material'
import { addIngredientAC, EditableSpan, IngredientsComponents, ModalAddIngredients, receiptsType, recipeType, removeIngredientAC, removeRecipeAC, updateIngredientsRecipeTC, updatePersonsForRecipeTC } from 'common'
import styled from 'styled-components'
import { useAppDispatch } from 'app'
import { DeleteIcon } from 'assets'

type PropsType = { recipe: receiptsType }

export const RecipeComponent = ({ recipe }: PropsType) => {
  const dispatch = useAppDispatch()
  const upDatePersonRecipeHandler = (newValue: string) => dispatch(updatePersonsForRecipeTC({ recipe, newPersons: Number(newValue) }))
  const upDateRecipeHandler = (newValue: string, id: string) => dispatch(updateIngredientsRecipeTC({ newValue, id, recipe }))
  const deleteRecipeHandler = () => dispatch(removeRecipeAC({ id: recipe.id }))
  const addIngredientHandler = (ingredient: recipeType) => dispatch(addIngredientAC({ id: recipe.id, ingredient }))
  const deleteIngredientHandler = (id: string) => dispatch(removeIngredientAC({ recipeId: recipe.id, ingredientId: id }))

  return (
    <Paper sx={{ width: '60%', margin: '5px 0', padding: '0 15px' }}>
      <HeaderComponent>
        <LeftHeaderComponent>
          <h2>{recipe.title}</h2>
          <img style={{ margin: '8px' }} width={24} height={24} src={DeleteIcon} alt="Delete recepe icon"
               onClick={deleteRecipeHandler}/>
          <ModalAddIngredients addIngredientCallback={addIngredientHandler}/>
        </LeftHeaderComponent>
        <EditableSpan value={recipe.value.toString()} onChange={upDatePersonRecipeHandler}/>
      </HeaderComponent>
      <IngredientsContainer>
        {recipe.ingredients.map((el) => <IngredientsComponents key={el.id}
                                                               state={{ ingredient: el.ingredient, value: el.value, measurement: el.measurement, id: el.id }}
                                                               upDateRecipeCallback={upDateRecipeHandler}
                                                               deleteIngredientCallback={deleteIngredientHandler}/>)}
      </IngredientsContainer>
    </Paper>
  )
}

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
