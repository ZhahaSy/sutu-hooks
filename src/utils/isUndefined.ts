export const isUndefined = (data: any, mode: 'normal' | 'strict' = 'normal') => {
  if (mode === 'normal') {
    return data === undefined
  }

  return [undefined, 'undefined'].includes(data)
}
