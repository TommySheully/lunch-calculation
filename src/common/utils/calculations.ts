import { receiptsType, recipeType } from 'common'

export const calculation = (r: receiptsType, c: number): receiptsType => {
  return {
    ...r,
    value: r.value * c,
    ingredients: r.ingredients.map((el) => ({
      ...el,
      value: el.value ? Number((el.value * c).toFixed(2)) : el.value,
    })),
  }
}

export const combiningItem = (purchase: recipeType[]) => {
  const map = {} as Record<string, recipeType>
  purchase.forEach((ing) => {
    map[ing.ingredient] ??= { ...ing, value: 0 }
    map[ing.ingredient].value += ing.value
  })
  return Object.values(map).filter((x) => !x.exclude)
}
