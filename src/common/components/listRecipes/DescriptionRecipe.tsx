import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import { Paper } from '@mui/material'
import { useAppDispatch } from 'app'
import { addRecipeAC, receiptsType, theme } from 'common'
import { v4 } from 'uuid'

type PropsType = {
  recipe: receiptsType
}

export const DescriptionRecipe = ({ recipe }: PropsType) => {
  const { title, ingredients } = recipe

  const dispatch = useAppDispatch()
  const addRecipeHandler = () => {
    const newRecipe = { ...recipe, id: v4() }
    dispatch(addRecipeAC({ recipe: newRecipe }))
  }

  return (
    <Paper sx={style}>
      <LeftContainer>
        <h2 style={{ margin: 5 }}>{title}</h2>
        <IngredientContainer>
          {ingredients.map((el) => <p key={v4()}  style={{ margin: 2 }}>{el.ingredient}, </p>)}
        </IngredientContainer>
      </LeftContainer>
      <RightContainer>
        <Button variant="outlined" sx={{ color: theme.color, borderColor: theme.color }} onClick={addRecipeHandler}>Добавить в меню</Button>
      </RightContainer>
    </Paper>
  )
}

const style = {
  display: 'flex',
  width: '100%',
  margin: '5px',
  padding: '10px',

  justifyContent: 'space-around'
}

const LeftContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  flex-direction: column;
`

const RightContainer = styled.div`
  display: flex;
  justify-content: center;

  margin: 0;
  flex-direction: column;
`

const IngredientContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
