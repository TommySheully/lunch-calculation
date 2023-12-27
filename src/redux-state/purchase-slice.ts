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
    clearPurchaseAC(state) {
      state.additionalPurchase = []
    },
    addAdditionalPurchaseAC(state, action: PayloadAction<{ additionalPurchase: recipeType }>) {
      state.additionalPurchase.push(action.payload.additionalPurchase)
    },
    updateAdditionalPurchaseAC(state, action: PayloadAction<{ value: number, id: string }>) {
      state.additionalPurchase = state.additionalPurchase.map((el) => (el.id === action.payload.id ? {...el, value: action.payload.value} : el))
    },
    removeAdditionalPurchaseAC(state, action: PayloadAction<{ id: string }>) {
      state.additionalPurchase = state.additionalPurchase.filter((el) => el.id !== action.payload.id)
    }
  }
})

export const purchaseReducer = slice.reducer
export const { setPurchaseAC, addAdditionalPurchaseAC, updateAdditionalPurchaseAC, removeAdditionalPurchaseAC, clearPurchaseAC } = slice.actions
