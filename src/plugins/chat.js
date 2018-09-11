export default function () {
  window.$crisp = []
  window.CRISP_WEBSITE_ID = process.env.VUE_APP_CRISP_WEBSITE_ID

  const d = document
  const s = d.createElement('script')

  s.src = 'https://client.crisp.chat/l.js'
  s.async = 1

  d.getElementsByTagName('head')[0].appendChild(s)
}
