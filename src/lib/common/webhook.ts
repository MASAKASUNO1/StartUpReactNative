////////////////////////////////////////
/// MARK: - slack通知
////////////////////////////////////////
async function sendSlack(title: string, slackName = 'その他'): Promise<void> {
  const _url = process.env.SLACK_WEB_HOOK || ''
  const _payload = {
    channel: '#metapedia-ugc',
    username: slackName,
    text: title,
    icon_url: '',
  }
  try {
    await fetch(_url, {
      method: 'POST',
      body: `${JSON.stringify(_payload)}`,
    })
  } catch (e) {
    console.log(e)
  }
}

export { sendSlack }
