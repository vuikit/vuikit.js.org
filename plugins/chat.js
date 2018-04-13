export default async function ({ app: { router } }) {
  window.$crisp = []
  window.CRISP_WEBSITE_ID = '7736edb1-bd66-4f9d-8b21-456db916d630'

  const d = document
  const s = d.createElement('script')

  s.src = 'https://client.crisp.chat/l.js'
  s.async = 1

  d.getElementsByTagName('head')[0].appendChild(s)
}
