import React from 'react'
import { recipes } from 'common'
import styled from 'styled-components'
import { DescriptionRecipe } from 'components'

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
