import React from 'react'
import { Paper } from '@mui/material'
import { receiptsType } from 'common'
import styled from 'styled-components'
import { IngredientsComponents } from './ingredientsComponents/IngredientsComponents'

type PropsType = {
  recipe: receiptsType
}

export const RecipeComponent = ({ recipe }: PropsType) => {

  return (
    <Paper sx={{ width: '60%', margin: '5px 0',  padding: '0 15px' }}>
      <HeaderComponent>
        <h2>{recipe[0]}</h2>
        <h2>{recipe[1]} </h2>
      </HeaderComponent>
      <IngredientsContainer>
        {recipe[2].map((el) => <IngredientsComponents ingredient={el.ingredient} measurement={el.measurement} value={el.value}/>)}
      </IngredientsContainer>
    </Paper>
  )
}

const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`
