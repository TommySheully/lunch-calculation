import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import { Paper } from '@mui/material'
import { useAppDispatch } from 'app'
import { addTaskAC, receiptsType, theme } from 'common'


type PropsType = {
  header: string
  ingredientList: string[]
  recipe: receiptsType
}

export const RecipeCompound = ({ header, ingredientList, recipe }: PropsType) => {

  const dispatch = useAppDispatch()
  const onHandler = () => {
    dispatch(addTaskAC({ recipe }))
  }

  return (
    <Paper sx={style}>
      <LeftContainer>
        <h2 style={{ margin: 5 }}>{header}</h2>
        <IngredientContainer>
          {ingredientList.map((el) => <p style={{ margin: 2 }}>{el}, </p>)}
        </IngredientContainer>
      </LeftContainer>
      <RightContainer>
        <Button variant="outlined" sx={{ color: theme.color, borderColor: theme.color }} onClick={onHandler}>Добавить в
          меню</Button>
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
