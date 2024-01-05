import React from 'react'
import { recipesSelector, useAppDispatch, useAppSelector } from 'app'
import { AddRecipeModal, ButtonUniversal, savePdf, theme } from 'common'
import styled from 'styled-components'
import { Paper } from '@mui/material'
import { Persons, Recipe } from 'pages'
import { clearRecipeAC, updatePersonsTC } from 'redux-state'

export const Menu = () => {
  const { recipes, persons } = useAppSelector(recipesSelector)
  const dispatch = useAppDispatch()
  const handleUpdatePersons = (value: string) => dispatch(updatePersonsTC(Number(value)))
  const handleClearMenu = () => dispatch(clearRecipeAC())
  const handleSavePdf = () => savePdf('pdf-menu', 'menu')
  return (
    <Component id="pdf-menu">
      <Paper
        sx={style}>
        <AddRecipeModal/>
        <ButtonUniversal onClick={handleClearMenu}>очистить меню</ButtonUniversal>
        <ButtonUniversal onClick={handleSavePdf}>скачать меню</ButtonUniversal>
      </Paper>
      <Persons changePersons={handleUpdatePersons} persons={persons}/>
      {recipes.map((el) => <Recipe key={el.id} recipe={el}/>)}
    </Component>
  )
}

const Component = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${theme.background};
`

const style = { width: '60%', margin: '5px 0', padding: '0 15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }
