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

// *𓍯𓂃𓏧♡ STYLES TEXTS*

import fetch from "node-fetch"
import * as cheerio from "cheerio"
import _ from "lodash"

let HS = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, `❀ Ingresa un texto`, m)

try {
let data = await styletxt(text)
    
let txt = "Aquí tienes los diferentes *estilos* de texto\n\n"
data.forEach(item => { if (item.nameEstilo !== "Tag") { txt += `*${item.nameEstilo}:*\n${item.estilo}\n\n` } })

await  conn.reply(m.chat, txt, m)
    
} catch (error) {
console.error(error)
}}

HS.command = ['stylestext', 'textstyles']

export default HS

async function styletxt(query) {
try {
const pag = await fetch(`http://qaz.wtf/u/convert.cgi?text=${encodeURIComponent(query)}`)
const html = await pag.text()
const $ = cheerio.load(html)
return _.chain($("table tr"))
.map(row => {
const cells = $(row).find("td");
return cells.length > 1 ? {
nameEstilo: $(cells[0]).find(".aname").text() || $(cells[0]).text(),
estilo: $(cells[1]).html().trim()
} : null
})
.compact()
.value()
} catch (error) {
console.error("ERROR STYLES TEXTS : ", error)
}}
