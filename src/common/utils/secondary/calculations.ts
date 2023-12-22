import { exceptions, receiptsType, recipeType } from 'common'

type CoefficientPropsType = { newPersons: number, persons: number }
type CalculationPropsType = { element: receiptsType, coefficientValue: number }
type ConsolidateType = { recipeItems: receiptsType[], additionalPurchase: recipeType[] }

export const coefficient = ({ newPersons, persons }: CoefficientPropsType) => (newPersons / persons)

export const calculation = ({ element, coefficientValue }: CalculationPropsType) => {
  const add = { ...element }
  add.value = add.value * coefficientValue
  add.ingredients = add.ingredients.map((el) => ({ ...el, value: el.value ? Number((el.value * coefficientValue).toFixed(2)) : el.value }))
  return add
}

export const consolidatePurchaseItems = ({recipeItems, additionalPurchase}: ConsolidateType) => {
  let purchase: recipeType[] = []
  for (let variable of recipeItems) {
    for (let ingredient of variable.ingredients) {
      purchase.push(ingredient)
    }
  }
  for (let ingredient of additionalPurchase) {
    purchase.push(ingredient)
  }
  return combiningItem(purchase)
}

export const combiningItem = (purchase: recipeType[]) => {
  const purchaseCopy: recipeType[] = JSON.parse(JSON.stringify(purchase))
  const newPurchase = purchaseCopy.reduce((acc, curr) => {
    if (acc[curr.ingredient]) {
      acc[curr.ingredient].value = Number(acc[curr.ingredient].value) + Number(curr.value)
    } else {
      acc[curr.ingredient] = curr
    }
    return acc
  }, {} as Record<string, recipeType>)
  return Object.values(newPurchase).filter(el => !exceptions.includes(el.ingredient))
}
