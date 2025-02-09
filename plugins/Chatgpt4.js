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

// ❀ Canal Owner Api : 
// https://whatsapp.com/channel/0029VakPf6C0bIdnzOGlMZ1K

// *𓍯𓂃𓏧♡ CHATGPT 4*
import axios from 'axios'

let HS = async (m, { conn, text }) => {
if (!text)  return conn.reply(m.chat, `❀ Ingresa un texto para hablar con chatgpt4`, m)
    
try {
let api = await axios.get(`https://mahiru-shiina.vercel.app/docs/api/ai/chatgpt4?text=${text}`)
let json = await api.data

m.reply(json.answer)
} catch (error) {
console.error(error)    
}}

HS.command = ['gpt4', 'chatgpt4']

export default HS
