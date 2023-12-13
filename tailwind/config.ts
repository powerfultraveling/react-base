function buildSpacing(num: number) {
    const spacingNumbers = [...Array(num).keys()]

    return spacingNumbers.reduce((spacing, i) => {
        return {
            ...spacing,
            [i]: `${i * 0.25}rem`
        }
    }, {})
}