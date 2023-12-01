import React from 'react'
import { recipes } from 'common'
import styled from 'styled-components'
import { RecipeCompound } from './RecipeСompound'

export const ListRecipes = () => {

  return (
    <Component>
      {recipes.map((el) => <RecipeCompound header={el[0]} ingredientList={el[2].map((ing) => ing.ingredient)} recipe={el}/>)}
    </Component>
  )
}

const Component = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
