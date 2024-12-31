function handler(m) {
let name = conn.getName('595992667005@s.whatsapp.net')
let ownerN = '595992667005'
conn.sendContact(m.chat, [[`${ownerN}@s.whatsapp.net`, `${name}`]], m, {
 contextInfo: { 
 forwardingScore: 2023,
isForwarded: false, 
 externalAdReply: {  
 title: `Este es mi maravilloso creador`, 
 body: botName, 
 sourceUrl: '',
 thumbnail: imagen,
 thumbnailUrl: '', 
 mediaType: 1,
 showAdAttribution: true, 
 renderLargerThumbnail: true 
 }
   }
     },
       {
         quoted: fkontak
           }
             );

}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 

export default handler