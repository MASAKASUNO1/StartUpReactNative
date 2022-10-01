////////////////////////////////////////
/// MARK: - 小文字を大文字にする
////////////////////////////////////////
const toUpperCase = (lower: string) => {
  return lower.replace(/[a-z]/g, function (ch) {
    return String.fromCharCode(ch.charCodeAt(0) & ~32)
  })
}

////////////////////////////////////////
/// MARK: - 大文字を小文字にする
////////////////////////////////////////
const toLowerCase = (upper: string) => {
  return upper.replace(/[A-Z]/g, function (ch) {
    return String.fromCharCode(ch.charCodeAt(0) | 32)
  })
}

export { toLowerCase, toUpperCase }
