const fetch = require("node-fetch")

case 'sps':
case 'spotifys':
case 'spotifysearch':
case 'spotify': {
if (!text) return m.reply(${prefix + command} untuk mencintaimu)
m.reply('Proses 🗿')
await fetch(https://api.diioffc.web.id/api/search/spotify?query=${text}).then(async (res) => {
let response = await res.json()
let teks = '🔎 Hasil Pencarian SPOTIFY\n\n'
for (let i of response.result) {
teks += *◦ Judul :* ${i.trackName}\n
teks += *◦ Artis :* ${i.artistName}\n
teks += *◦ Link Url :* ${i.externalUrl}\n\n
}
m.reply(teks)
}).catch(err => m.reply('Error 🗿'))
}
break
