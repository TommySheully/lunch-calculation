import React from 'react'
import { theme } from 'common'
import Button from '@mui/material/Button'

export const PdfComponents = () => {

  return (
    <div>
      <Button sx={{ color: theme.color, borderColor: theme.color }}
              onClick={() => {}}>Скачать меню</Button>
    </div>
  )
}
