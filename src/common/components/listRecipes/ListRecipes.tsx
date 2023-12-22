import React from 'react'
import { DescriptionRecipe, recipes } from 'common'
import styled from 'styled-components'

export const ListRecipes = () => {
  return (
    <Component>
      {recipes.map((el) => <DescriptionRecipe key={el.id} recipe={el}/>)}
    </Component>
  )
}

const Component = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
