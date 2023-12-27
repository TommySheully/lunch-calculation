import React, { useState } from 'react'
import { Box, Button, Modal } from '@mui/material'
import { theme } from 'common'
import { ListRecipes } from 'components'

export const AddRecipeModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box>
      <Button sx={{ color: theme.color, borderColor: theme.color }} onClick={handleOpen}>Добавить блюдо из списка</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ListRecipes/>
        </Box>
      </Modal>
    </Box>
  )
}

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
