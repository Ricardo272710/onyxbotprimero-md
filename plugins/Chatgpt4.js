/* 

❀ By JTxs

[ Canal Principal ] :
https://whatsapp.com/channel/0029VaeQcFXEFeXtNMHk0D0n

[ Canal Rikka Takanashi Bot ] :
https://whatsapp.com/channel/0029VaksDf4I1rcsIO6Rip2X

[ Canal StarlightsTeam] :
https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S

[ HasumiBot FreeCodes ] :
https://whatsapp.com/channel/0029Vanjyqb2f3ERifCpGT0W
*/

// *[ ❀ CHATGPT ]*
import fetch from 'node-fetch'

let HS = async (m, { conn, command, text, usedPrefix }) => {
if (!text) return conn.reply(m.chat, '❀ ingresa un texto para hablar con chatgpt', m)
//si borras creditos eri gei 👀
try {
let api = await fetch(`https://api.davidcyriltech.my.id/ai/chatbot?query=${text}`)
let json = await api.json()
let JT = { contextInfo: { externalAdReply: { title: 'Chatgpt - Ai', body: null,  mediaType: 1, previewType: 0, mediaUrl: 'https://chatgpt.com', sourceUrl: 'https://chatgpt.com', thumbnailUrl: 'https://i.pinimg.com/originals/9d/e4/97/9de497cbac67554d199b5945006f14d0.jpg', renderLargerThumbnail: false }}}

  await conn.reply(m.chat, json.result, m, JT)

} catch (error) {
console.error(error)
}}

HS.command = ['gpt4']

export default HS
//Dejen creditos 👀 [ By Jtxs ] https://whatsapp.com/channel/0029Vanjyqb2f3ERifCpGT0W
