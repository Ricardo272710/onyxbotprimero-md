/* ౨ৎ ˖ ࣪⊹ 𝐁𝐲 𝐉𝐭𝐱𝐬 𐙚˚.ᡣ𐭩

❀ Canal Principal ≽^•˕• ྀི≼
https://whatsapp.com/channel/0029VaeQcFXEFeXtNMHk0D0n

❀ Canal Rikka Takanashi Bot
https://whatsapp.com/channel/0029VaksDf4I1rcsIO6Rip2X

❀ Canal StarlightsTeam
https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S

❀ HasumiBot FreeCodes 
https://whatsapp.com/channel/0029Vanjyqb2f3ERifCpGT0W
*/

// *𓍯𓂃𓏧♡ TEXTIMG - IA*

import axios from 'axios'

let HS = async (m, { conn, text }) => {
if (!text)  return conn.reply(m.chat, `❀ Ingresa un texto de lo que quieres que genere la IA`, m)

try {
let img = await axios.get(`https://api.agungny.my.id/api/text2img?prompt=${text}`, { responseType: 'arraybuffer' })
   
await conn.sendMessage(m.chat, { image: Buffer.from(img.data), caption: `*❀ Resultado de :* ${text}` }, { quoted: m })
} catch (error) {
console.error(error)
}}

HS.command = ['textimg', 'imgtext', 'text2img']

export default HS
