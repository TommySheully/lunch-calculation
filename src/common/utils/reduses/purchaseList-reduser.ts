import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PurchaseReduserType, recipeType } from 'common'


const initialState: PurchaseReduserType = { purchase: [] }


const slice = createSlice({
  name: 'purchase',
  initialState: initialState,
  reducers: {
    setPurchaseAC(state, action: PayloadAction<{ purchase: recipeType[] }>) {
      state.purchase = action.payload.purchase
    },
  }
})

export const purchaseReducer = slice.reducer
export const { setPurchaseAC } = slice.actions
