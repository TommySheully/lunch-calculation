import React from 'react'
import { savePdf, theme } from 'common'
import Button from '@mui/material/Button'

export const SaveMenu = () => {

  const savePdfHandler = () => {
    savePdf('pdf-menu', 'menu')
  }

  return (
    <div>
      <Button sx={{ color: theme.color, borderColor: theme.color }}
              onClick={savePdfHandler}>Скачать меню</Button>
    </div>
  )
}
