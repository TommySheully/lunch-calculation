import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import { BasicModal, PurchaseSave, SaveMenu } from 'common'

export const AppBarComponent = () => {
  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BasicModal/>
          <PurchaseSave/>
          <SaveMenu/>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
