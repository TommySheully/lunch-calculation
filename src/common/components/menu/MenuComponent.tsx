import React from 'react'
import { recipesSelector, useAppDispatch, useAppSelector } from 'app'
import styled from 'styled-components'
import { updatePersonsAC, Persons, RecipeComponent } from 'common'

export const MenuComponent = () => {
  const {recipes, persons} = useAppSelector(recipesSelector)
  const dispatch = useAppDispatch()

  const updatePersonsHandler = (newValue: string) => {
    dispatch(updatePersonsAC({ newValue: Number(newValue) }))
  }

  return (
    <Component>
      <Persons changePersons={updatePersonsHandler} persons={persons}/>
      {recipes.map((el) => <RecipeComponent key={el.id} recipe={el}/>)}
    </Component>
  )
}

const Component = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #c4f5e4;
`
