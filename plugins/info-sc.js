import moment from 'moment-timezone';
import fetch from 'node-fetch';

const handler = async (m, { conn, args }) => {
   const fkontak = {
      key: {
         participants: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         fromMe: false,
         id: "Halo",
      },
      message: {
         contactMessage: {
            displayName: "ShizukaBot",
            vcard: "BEGIN:VCARD\nVERSION:3.0\nN:Shizuka;;;\nFN:ShizukaBot\nTEL;type=CELL;type=VOICE;waid=0:+0\nEND:VCARD",
         },
      },
   };

   const res = await fetch('https://api.github.com/repos/Alba070503-Official/HokaruBot-MD');
   const json = await res.json();
   let txt = `           *乂  B O T S C R I P T  乂*\n\n`;
      txt += `◦  *Nombre:* ${json?.name || 'ShizukaBot-MD'}\n`;
      txt += `◦  *Visitantes:* ${json?.watchers_count || '-'}\n`;
      txt += `◦  *Tamaño:* ${(json?.size / 1024).toFixed(2) || '-'} MB\n`;
      txt += `◦  *Actualización:* ${moment(json?.updated_at).format('DD/MM/YY - HH:mm:ss') || '-'}\n`;
      txt += `◦  *Url:* ${json?.html_url || 'https://github.com/Alba070503-Official/ShizukaBot-MD'}\n\n`;
      txt += `         ${json?.forks_count || '-'} Forks · ${json?.stargazers_count || '-'} Stars · ${json?.open_issues_count || '-'} Issues`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": 'Repositorio Oficial', "containsAutoReply": true, "mediaType": 1, "thumbnail": 'https://files.catbox.moe/rt8xqt.jpg', "mediaUrl": `https://github.com/Alba070503-Official/HokaruBot-MD`, "sourceUrl": `https://github.com/Alba070503-Official/HokaruBot-MD`}}}, {quoted: fkontak});
};

handler.help = ['scbot'];
handler.tags = ['info'];
handler.command = /^(sc|scbot|scrip|script)$/i;
export default handler;
