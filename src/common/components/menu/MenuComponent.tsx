import React from 'react'
import { recipesSelector, useAppDispatch, useAppSelector } from 'app'
import { BasicModal, Persons, RecipeComponent, SaveMenu, theme, updatePersonsTC } from 'common'
import styled from 'styled-components'
import { Paper } from '@mui/material'


export const MenuComponent = () => {
  const { recipes, persons } = useAppSelector(recipesSelector)
  const dispatch = useAppDispatch()
  const updatePersonsHandler = (newPersons: string) => {
    dispatch(updatePersonsTC(Number(newPersons)))
  }

  return (
    <Component id='pdf-menu'>
      <Paper
        sx={{ width: '60%', margin: '5px 0', padding: '0 15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <BasicModal/>
        <SaveMenu/>
      </Paper>
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
