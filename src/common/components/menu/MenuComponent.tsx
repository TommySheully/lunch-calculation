import React from 'react'
import { purchaseSelector, recipesSelector, useAppDispatch, useAppSelector } from 'app'
import { Persons, RecipeComponent, theme, updatePersonsTC } from 'common'
import styled from 'styled-components'


export const MenuComponent = () => {
  const { recipes, persons } = useAppSelector(recipesSelector)
  const { purchase } = useAppSelector(purchaseSelector)
  const dispatch = useAppDispatch()
  console.log(purchase)
  const updatePersonsHandler = (newPersons: string) => {
    dispatch(updatePersonsTC(Number(newPersons)))
  }

  return (
    <Component>
      <Persons changePersons={updatePersonsHandler} persons={persons}/>
      {recipes.map((el) => <RecipeComponent key={el.id} recipe={el}/>)}
      {purchase.map((el) => <p key={el.id}>{el.ingredient}</p>)}
    </Component>
  )
}

const Component = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${theme.background};
`
