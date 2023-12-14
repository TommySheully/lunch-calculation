import { exceptions, receiptsType, recipeType } from 'common'

type CoefficientPropsType = { newPersons: number, persons: number }
type CalculationPropsType = { element: receiptsType, coefficientValue: number }

export const coefficient = ({ newPersons, persons }: CoefficientPropsType) => {
  return (newPersons / persons)
}

export const calculation = ({ element, coefficientValue }: CalculationPropsType) => {
  const add = { ...element }
  add.value = add.value * coefficientValue
  add.ingredients = add.ingredients.map((el) => ({ ...el, value: el.value ? Number((el.value * coefficientValue).toFixed(2)) : el.value }))
  return add
}

export const consolidatePurchaseItems = (recipeItems: receiptsType[]) => {
  let purchase: recipeType[] = []
  for (let variable of recipeItems) {
    for (let ingredient of variable.ingredients) {
      purchase.push(ingredient)
    }
  }

  const purchaseCopy: recipeType[] = JSON.parse(JSON.stringify(purchase))
  const newPurchase = purchaseCopy.reduce((acc, curr) => {
    if (acc[curr.ingredient]) {
      acc[curr.ingredient].value += curr.value
    } else {
      acc[curr.ingredient] = curr
    }
    return acc
  }, {} as Record<string, recipeType>)

  return Object.values(newPurchase).filter(el => !exceptions.includes(el.ingredient))
}
