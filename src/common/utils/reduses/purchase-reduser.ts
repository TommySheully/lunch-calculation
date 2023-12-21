import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PurchaseReduserType, recipeType } from 'common'


const initialState: PurchaseReduserType = { purchase: [], additionalPurchase: [] }


const slice = createSlice({
  name: 'purchase',
  initialState: initialState,
  reducers: {
    setPurchaseAC(state, action: PayloadAction<{ purchase: recipeType[] }>) {
      state.purchase = action.payload.purchase
    },
    setAdditionalPurchaseAC(state, action: PayloadAction<{ additionalPurchase: recipeType[] }>) {
      state.additionalPurchase = action.payload.additionalPurchase
    },
    addAdditionalPurchaseAC(state, action: PayloadAction<{ additionalPurchase: recipeType }>) {
      state.additionalPurchase.push(action.payload.additionalPurchase)
    },
    updateAdditionalPurchaseAC(state, action: PayloadAction<{ newValue: number, id: string }>) {
      const index = state.additionalPurchase.findIndex(el => el.id === action.payload.id)
      state.additionalPurchase[index].value = action.payload.newValue
    },
    removeAdditionalPurchaseAC(state, action: PayloadAction<{ id: string }>) {
      const index = state.additionalPurchase.findIndex(el => el.id === action.payload.id)
      state.additionalPurchase.splice(index, 1)
    }
  }
})

export const purchaseReducer = slice.reducer
export const { setPurchaseAC, addAdditionalPurchaseAC, updateAdditionalPurchaseAC, removeAdditionalPurchaseAC } = slice.actions
