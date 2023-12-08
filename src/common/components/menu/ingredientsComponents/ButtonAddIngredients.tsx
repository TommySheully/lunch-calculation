import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import { ingredients, measurementType, recipeType, SelectIngredients, theme } from 'common'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import { SubmitHandler, useController, useForm } from 'react-hook-form'
import {v4} from "uuid";

type PropsType = {
  addIngredientCallback: (ingredient: recipeType) => void
}

export const ButtonAddIngredients = ({ addIngredientCallback }: PropsType) => {

  const { control, handleSubmit, formState: { errors } } = useForm<recipeType>({
    defaultValues: {
      measurement: 'кг',
      value: 0
    }
  })

  const { field: { onChange: setValue, value, onBlur } } = useController({ control, name: 'value', rules: { required: true } })

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.validity.valid) {
      e.target.value = String(value)
    }
    setValue(e.currentTarget.value)
  }

  const onSubmit: SubmitHandler<recipeType> = async data => {
    const { ingredient, value } = data
    const allIngredients = Object.values(ingredients).flat()
    const selectedIngredientData = allIngredients.find((i) => i.ingredient === ingredient)
    const measurement = selectedIngredientData!.measurement === undefined ? 'кг' as measurementType : selectedIngredientData!.measurement as measurementType
    addIngredientCallback({ ingredient, measurement, value, id: v4() })
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>

      <SelectIngredients control={control}/>
      {errors.ingredient && <p style={{ color: 'red' }}>Ингредиент необходимо выбрать.</p>}
      <TextField size={'small'} onChange={changeTitle} autoFocus inputProps={{ pattern: '[0-9]*' }}
                 label="Введите количество" onBlur={onBlur} value={value}/>
      {errors.value && <p style={{ color: 'red' }}>Укажите количество.</p>}
      <Button sx={{ color: theme.color, borderColor: theme.background }} onClick={handleSubmit(onSubmit)}>Добавить новый
        ингредиент</Button>
    </Container>
  )
}

const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  margin-bottom: 5px;
  gap: 10px;

  border: 1px solid;
`
