import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import { BasicModal, Purchase } from 'common'
import { PdfComponents } from '../pdf/PdfComponents'

export const AppBarComponent = () => {
  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BasicModal/>
          <Purchase/>
          <PdfComponents/>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
