import { ActionCreatorsMapObject, AnyAction, bindActionCreators, combineReducers } from 'redux'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import storage from 'redux-persist/lib/storage'

import { configureStore } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { recipesReducer, purchaseReducer } from 'common'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage
}

const persistedRecipesReducer = persistReducer(persistConfig, recipesReducer)
const persistedPurchaseReducer = persistReducer(persistConfig, purchaseReducer)

const rootReducer = combineReducers({
  recipes: persistedRecipesReducer,
  purchase: persistedPurchaseReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)
})

export const persistor = persistStore(store)
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export function useActions<T extends ActionCreatorsMapObject<any>>(actions: T) {
  const dispatch = useAppDispatch()

  const containerAction = useMemo(() => {
    return bindActionCreators(actions, dispatch)
  }, [])
}
