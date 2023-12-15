import React from 'react'
import { purchaseSelector, recipesSelector, useAppDispatch, useAppSelector } from 'app'
import { Persons, RecipeComponent, theme, updatePersonsTC } from 'common'
import styled from 'styled-components'
import { usePDF } from 'react-to-pdf'


export const MenuComponent = () => {
  const { recipes, persons } = useAppSelector(recipesSelector)
  const { purchase } = useAppSelector(purchaseSelector)

  const { targetRef } = usePDF({filename: 'page.pdf'})
  const dispatch = useAppDispatch()
  const updatePersonsHandler = (newPersons: string) => {
    dispatch(updatePersonsTC(Number(newPersons)))
  }

  return (
    <Component ref={targetRef}>
      <Persons changePersons={updatePersonsHandler} persons={persons}/>
      {recipes.map((el) => <RecipeComponent key={el.id} recipe={el}/>)}
    </Component>
  )
}

const Component = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${theme.background};
`
