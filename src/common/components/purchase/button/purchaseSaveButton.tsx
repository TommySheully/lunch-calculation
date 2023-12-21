import React from 'react'
import Button from '@mui/material/Button'
import { savePdf, theme } from 'common'

export const PurchaseSaveButton = () => {
  const savePurchaseHandler = () => {
    savePdf('pdf-purchase', 'purchase')
  }

  return (
    <div>
      <Button sx={{ color: theme.color, borderColor: theme.color }} onClick={savePurchaseHandler}>Скачать закупочный лист</Button>
    </div>
  )
}
