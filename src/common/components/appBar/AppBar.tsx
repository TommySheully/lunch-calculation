import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import { BasicModal, Purchase } from 'common'

export const AppBarComponent = () => {
  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BasicModal />
          <Purchase/>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
