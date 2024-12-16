export const pxToRem = (px: number, htmlFontSize = 16) => {
  return `${px / htmlFontSize}rem`
}

export const remToPx = (remInString: string) => {
  if (typeof getComputedStyle === 'undefined') return 0

  // 移除rem字串，並且轉換成數字
  const rem = parseFloat(remInString)
  // 取得當前瀏覽器的預設字體大小
  const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)

  return rem * baseFontSize
}
