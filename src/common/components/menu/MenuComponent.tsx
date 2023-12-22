import React from 'react'
import { recipesSelector, useAppDispatch, useAppSelector } from 'app'
import { BasicModal, Persons, RecipeComponent, ButtonUniversal, savePdf, theme, updatePersonsTC, clearRecipeAC } from 'common'
import styled from 'styled-components'
import { Paper } from '@mui/material'


export const MenuComponent = () => {
  const { recipes, persons } = useAppSelector(recipesSelector)
  const dispatch = useAppDispatch()
  const updatePersonsHandler = (newPersons: string) => dispatch(updatePersonsTC(Number(newPersons)))
  const clearMenuHandler = () => dispatch(clearRecipeAC())
  const savePdfHandler = () => savePdf('pdf-menu', 'menu')
  return (
    <Component id="pdf-menu">
      <Paper
        sx={{ width: '60%', margin: '5px 0', padding: '0 15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <BasicModal/>
        <ButtonUniversal title={'очистить меню'} callback={clearMenuHandler}/>
        <ButtonUniversal title={'скачать меню'} callback={savePdfHandler}/>
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
