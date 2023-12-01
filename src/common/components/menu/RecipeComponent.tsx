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
    <Paper sx={{ width: '50%', margin: '5px 0' }}>
      <HeaderComponent>
        <h2>{recipe[0]}</h2>
        <h2>на {recipe[1]} чел</h2>
      </HeaderComponent>
      <IngrComponent>
        {recipe[2].map((el) => <IngredientsComponents ingredient={el.ingredient} measurement={el.measurement} value={el.value}/>)}
      </IngrComponent>
    </Paper>
  )
}

const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`

const IngrComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`
