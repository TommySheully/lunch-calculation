import {AppRootStateType} from "app";

export const recipesSelector = (store: AppRootStateType) => store.recipes
export const purchaseSelector = (store: AppRootStateType) => store.purchase
