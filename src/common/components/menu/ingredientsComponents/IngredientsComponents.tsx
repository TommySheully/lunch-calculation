import React from 'react'
import { EditableSpan, exceptionsIngredients, recipeType } from 'common'
import styled from 'styled-components'
import { DeleteIcon } from 'assets'

type PropsType = {
  state: recipeType
  upDateRecipeCallback: (newValue: string, id: string) => void
  deleteIngredientCallback: (id: string) => void
}
export const IngredientsComponents = ({ state, upDateRecipeCallback, deleteIngredientCallback }: PropsType) => {
  const { ingredient, value, measurement, id } = state
  const upDateRecipeHandler = (newValue: string) => upDateRecipeCallback(newValue, id)
  const deleteIngredientHandler = () =>   deleteIngredientCallback(id)
  return (
    <Container>
      <LeftHeaderComponent>
        <h4 style={{ margin: '10px' }}>{ingredient}</h4>
        {!exceptionsIngredients.includes(ingredient) &&
          <img style={{ margin: '8px' }} width={24} height={24} src={DeleteIcon} alt="Delete recepe icon"
               onClick={deleteIngredientHandler}/>}
      </LeftHeaderComponent>
      {!exceptionsIngredients.includes(ingredient) && <RightContainer>
        <EditableSpan value={value!.toString()} onChange={upDateRecipeHandler}/>
        <h4>{measurement}</h4>
      </RightContainer>}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 42px;
  width: 100%;
  margin-bottom: 5px;
  gap: 10px;

  border: 1px solid;
`

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
  margin: 0 10px;
`

const LeftHeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
