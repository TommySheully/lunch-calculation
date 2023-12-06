import React from 'react'
import styled from 'styled-components'
import { theme } from 'common'
import Button from '@mui/material/Button'

export const ButtonAddIngredients = () => {
  return (
    <Container>
      <Button sx={{ color: theme.color, borderColor: theme.background, width: '100%' }} onClick={()=>{}}>Добавить новый ингредиент</Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 30px;
  width: 100%;
  margin-bottom: 5px;
  gap: 10px;
  
  border: 1px solid;
`
