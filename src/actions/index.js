export const assignColor = (id, color) => ({
  type: 'ASSIGN_COLOR',
  id,
  color,
})

export const assignActiveColorId = (id) => ({
  type: 'ASSIGN_ACTIVE_COLOR_ID',
  id,
})
