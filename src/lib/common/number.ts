////////////////////////////////////////
/// MARK: - それは数か、それとも・・・
////////////////////////////////////////
const isNumber = (str: string): boolean => {
  if (typeof str !== 'string') {
    return false
  }
  if (str.trim() === '') {
    return false
  }
  return !Number.isNaN(Number(str))
}

////////////////////////////////////////
/// MARK: - 必ず数字を返す
////////////////////////////////////////
const getNumber = (str?: string | null): number => {
  if (!str) {
    return 0
  }
  if (typeof str !== 'string') {
    return 0
  }
  if (str.trim() === '') {
    return 0
  }
  if (!Number.isNaN(Number(str))) {
    return Number(str)
  } else {
    return 0
  }
}

export { getNumber, isNumber }
