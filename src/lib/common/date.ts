////////////////////////////////////////
/// MARK: - unix時間を文字列に変換する
////////////////////////////////////////
const toDisplayDate = (num: number) => {
  const dt = new Date(num)
  const _ret = dt.toLocaleString('ja-JP')
  return _ret.slice(0, _ret.length - 3)
}

export { toDisplayDate }
