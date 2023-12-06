import { receiptsType } from 'common'

type CoefficientPropsType = { newPersons: number, persons: number }
type CalculationPropsType = { element: receiptsType, coefficientValue: number }

export const coefficient = ({ newPersons, persons }: CoefficientPropsType) => {
  return (newPersons / persons)
}

export const calculation = ({element, coefficientValue}: CalculationPropsType) => {
  const add = { ...element }
  add.value = add.value * coefficientValue
  add.ingredients = add.ingredients.map((el) => ({ ...el, value: el.value ? Number((el.value * coefficientValue).toFixed(2)) : el.value }))
  return add
}
