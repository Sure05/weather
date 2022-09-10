export const convertF = (x: number) => {
    return convertC(x) * 1.8 + 32
}

export const convertC = (x: number) => {
    return x - 273.15
}
