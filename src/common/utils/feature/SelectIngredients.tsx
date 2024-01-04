import React from 'react'
import { InputLabel, FormControl, SelectChangeEvent, Select, Box } from '@mui/material'
import { ingredients, recipeType } from 'common'
import { Control, useController } from 'react-hook-form'
import { v4 } from 'uuid'

type PropsType = { control: Control<recipeType> }

export const SelectIngredients = ({ control }: PropsType) => {
  const { field: { onChange: setIngredients, value: ingredient } } = useController({ control, name: 'ingredient', rules: { required: true } })
  const { fruits, driedFruits, juices, nuts, milks, spices, grocery, vegetables, greenery } = ingredients
  const handleChange = (event: SelectChangeEvent) => setIngredients(event.target.value as string)
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel htmlFor="grouped-native-select">Ингредиенты</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="ingredient" value={ingredient}
                onChange={handleChange} autoWidth={true}>
          <option aria-label="None" value=""/>
          <optgroup label="Овощи">
            {vegetables.map((el) => <option key={v4()} value={el.ingredient}>{el.ingredient}</option>)}
          </optgroup>
          <optgroup label="Зелень">
            {greenery.map((el) => <option key={v4()} value={el.ingredient}>{el.ingredient}</option>)}
          </optgroup>
          <optgroup label="Бакалея">
            {grocery.map((el) => <option key={v4()} value={el.ingredient}>{el.ingredient}</option>)}
          </optgroup>
          <optgroup label="Молочные продукты">
            {milks.map((el) => <option key={v4()} value={el.ingredient}>{el.ingredient}</option>)}
          </optgroup>
          <optgroup label="Специи">
            {spices.map((el) => <option key={v4()} value={el.ingredient}>{el.ingredient}</option>)}
          </optgroup>
          <optgroup label="Фрукты">
            {fruits.map((el) => <option key={v4()} value={el.ingredient}>{el.ingredient}</option>)}
          </optgroup>
          <optgroup label="Сухофрукты">
            {driedFruits.map((el) => <option key={v4()} value={el.ingredient}>{el.ingredient}</option>)}
          </optgroup>
          <optgroup label="Орехи">
            {nuts.map((el) => <option key={v4()} value={el.ingredient}>{el.ingredient}</option>)}
          </optgroup>
          <optgroup label="Соки">
            {juices.map((el) => <option key={v4()} value={el.ingredient}>{el.ingredient}</option>)}
          </optgroup>
        </Select>
      </FormControl>
    </Box>
  )
}
