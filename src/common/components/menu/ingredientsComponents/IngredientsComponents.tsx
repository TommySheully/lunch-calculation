import React from 'react'
import { EditableSpan, recipeType } from 'common'
import styled from 'styled-components'

type PropsType = {
  state: recipeType
  upDateRecipeCallback: (newValue: string, currentIngredient: string) => void
}
export const IngredientsComponents = ({ state, upDateRecipeCallback }: PropsType) => {
  const { ingredient, value, measurement } = state

  const upDateRecipeHandler = (newValue: string) => {
    upDateRecipeCallback(newValue, ingredient)
  }

  return (
    <Container>
      <h4>{ingredient}</h4>
      <RightContainer>
        <EditableSpan value={value!.toString()} onChange={upDateRecipeHandler}/>
        <h4>{measurement}</h4>
      </RightContainer>
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
  padding: 0 5px;
  border: 1px solid;
`

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
`
