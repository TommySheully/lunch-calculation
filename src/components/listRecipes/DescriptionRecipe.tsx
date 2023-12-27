import React from 'react'
import styled from 'styled-components'
import { Paper, Button } from '@mui/material'
import { useAppDispatch } from 'app'
import { receiptsType, theme } from 'common'
import { v4 } from 'uuid'
import { addRecipeAC } from 'redux-state'

type Props = { recipe: receiptsType }

export const DescriptionRecipe = ({ recipe }: Props) => {
  const { title, ingredients } = recipe
  const dispatch = useAppDispatch()
  const handleAddRecipe = () => dispatch(addRecipeAC({ recipe: { ...recipe, id: v4() } }))
  return (
    <Paper sx={style}>
      <HeaderBlock>
        <h2 style={{ margin: 5 }}>{title}</h2>
        <Button
          variant="outlined"
          sx={{ color: theme.color, borderColor: theme.color, flexShrink: 0 }}
          onClick={handleAddRecipe}
        >
          Добавить
        </Button>
      </HeaderBlock>
      <IngredientContainer>
        <p style={{ margin: 2 }}>Состав:</p>
        {ingredients.map((el) => (
          !el.exclude &&
          <p key={v4()} style={{ margin: 2 }}>
            {el.ingredient},{' '}
          </p>
        ))}
      </IngredientContainer>
    </Paper>
  )
}

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: '5px',
  padding: '10px',
  justifyContent: 'space-around'
}

const IngredientContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const HeaderBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: flex-start;
  justify-content: space-between;
`
