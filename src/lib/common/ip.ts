////////////////////////////////////////
/// MARK: - IPを取得する
////////////////////////////////////////
const getIp = async (): Promise<string | undefined> => {
  const _url = 'https://ipapi.co/json/'
  const _res = await fetch(_url)
  const _data = await _res.json()
  return _data.ip
}

export { getIp }
