function buildSpacingAmount(num: number) {
  const spacingNumbers = [...Array(num).keys()]

  return spacingNumbers.reduce((spacing, i) => {
    return {
      ...spacing,
      [i]: `${i * 0.25}rem`
    }
  }, {})
}

const SPACING_NUMBER = 160

const inset = {
  ...buildSpacingAmount(SPACING_NUMBER),
  full: '100%',
  half: '50%',
  auto: 'auto'
}

export const spacing = inset

export const width = { ...inset, screen: '100vw' }
export const height = { ...inset, screen: '100vh' }
