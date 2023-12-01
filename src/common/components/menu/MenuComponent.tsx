import React from 'react'
import { recipesSelector, useAppSelector } from 'app'
import styled from 'styled-components'
import { RecipeComponent } from './RecipeComponent'

export const MenuComponent = () => {
  const menu = useAppSelector(recipesSelector)

  console.log(menu)

  return (
    <Component>
      {menu.map((el) => <RecipeComponent recipe={el} />)}
    </Component>
  )
}

const Component = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: aquamarine;
`
