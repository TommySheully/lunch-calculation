import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import { ingredients, UnitType, recipeType, SelectIngredients, theme } from 'common'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import { SubmitHandler, useController, useForm } from 'react-hook-form'
import { v4 } from 'uuid'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Paper } from '@mui/material'

type PropsType = {
  addIngredientCallback: (ingredient: recipeType) => void
}

export const ModalAddIngredients = ({ addIngredientCallback }: PropsType) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { control, handleSubmit, formState: { errors } } = useForm<recipeType>({
    defaultValues: { measurement: 'кг', value: 0 }
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
    const measurement = selectedIngredientData!.measurement === undefined ? 'кг' as UnitType : selectedIngredientData!.measurement as UnitType
    addIngredientCallback({ ingredient, measurement, value, id: v4() })
  }

  return (
    <Box>
      <Button sx={{ color: theme.color, borderColor: theme.color }} onClick={handleOpen}>Добавить ингредиент</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Paper>
            <Container onSubmit={handleSubmit(onSubmit)}>
              <SelectIngredients control={control}/>
              {errors.ingredient && <p style={{ color: 'red' }}>Ингредиент необходимо выбрать.</p>}
              <TextField size={'small'} onChange={changeTitle} autoFocus inputProps={{ pattern: '[0-9]*' }}
                         label="Введите количество" onBlur={onBlur} value={value}/>
              {errors.value && <p style={{ color: 'red' }}>Укажите количество.</p>}

              <Button sx={{ color: theme.color, borderColor: theme.background }}
                      onClick={handleSubmit(onSubmit)}>Добавить
                новый
                ингредиент</Button>
            </Container>
          </Paper>
        </Box>
      </Modal>
    </Box>
  )
}

const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  margin-bottom: 5px;
  gap: 10px;
`
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'max(300px, 80%)',
  height: '80%',
  bgcolor: theme.background,
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
  overflowWrap: 'break-word'
}
