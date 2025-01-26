let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙣𝙮𝙭;;\nFN:𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙣𝙮𝙭\nORG:𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙣𝙮𝙭\nTITLE:\nitem1.TEL;waid=593985327644:593985327644\nitem1.X-ABLabel:𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙣𝙮𝙭\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙣𝙮𝙭\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
