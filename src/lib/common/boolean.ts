////////////////////////////////////////
/// MARK: - null undefinedチェック
////////////////////////////////////////
function isNullOrUndefined(obj: any): boolean {
  if (obj === undefined) return true
  if (obj === null) return true
  return false
}

////////////////////////////////////////
/// MARK: - undefined null space チェック
////////////////////////////////////////
function isNullOrUndefinedOrSpace(obj: any): boolean {
  if (obj === undefined) return true
  if (obj === null) return true
  if (obj === '') return true
  return false
}

export { isNullOrUndefined, isNullOrUndefinedOrSpace }
