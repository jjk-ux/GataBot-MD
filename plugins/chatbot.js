// by https://github.com/elrebelde21

import '../plugins/_content.js'
let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
if (chat.isBanned) return
let vn = 'https://qu.ax/Ocxm.mp3'
let bot = `${pickRandom([`*¡𝑬𝒚! 𝑨𝒒𝒖í 𝒆𝒔𝒕𝒐𝒚. 𝒀𝒐 𝒑𝒖𝒆𝒅𝒐 𝒂𝒚𝒖𝒅𝒂𝒓 👉👈 𝑯𝒆𝒚! 𝑰'𝒎 𝒉𝒆𝒓𝒆. 𝑰 𝒄𝒂𝒏 𝒉𝒆𝒍𝒑 🙌*`, `Aqui estoy | Here I am 😼`, `*Hola Aqui estoy yo puedo ayudar? | Hello, here I am, can I help? 😸*`])}`.trim()

/*if (/^infinity|infinityWa|infohost|hosting$/i.test(m.text)) {
 await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🤖 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘𝐖𝐀-𝐇𝐎𝐒𝐓 🤖`,
body: `✅ Hosting de Calidad`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/EQTd.jpg', 
sourceUrl: accountsgb}}},
{ quoted: fkontak})
} */
 
if (/^bot$/i.test(m.text)) {
await conn.reply(m.chat, bot, m, fakeChannel)
await conn.sendPresenceUpdate('recording', m.chat)    
await conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: m })   
}

if (/^e$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`Que bueno sabe la letra E`, `eeeeee`])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})}

/*if (/^Mande porno|porno|paja$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`no puedo esta contra las política del grupo.😸`, `_uff miren un pajero_`, `_pagame y paso mi pack😏🥵_`, `_que_`, `_que quiere pija dice 🤣_`, `_pasa el pack de tu hermana😏_`, `_mire un gilipolla_`, `_siuuu sexo sexo sexo😈_`, '_callate putito_'])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})}*/

if (/^قواعد|قوانين|Reglas$/i.test(m.text) ) { //sin prefijo 
conn.reply(m.chat, `*╭┅〘 ⚠️ قواعد البوت عشان متتحظرش⚠️ 〙*
➽❌ ممنوع الدخول خاص للبوت باي شكل من الاشكال
➽❌ ممنوع ادخال البوت جروبك من غير اذن مطوره +201144480436
➽❌ ممنوع سب البوت
➽❌ ممنوع التتقيل فالاستخدام
*╰═┅ৡৢ͜͡✦═╡ 𝙂𝙊𝙅𝙊-𝘽𝙊𝙏 ╞═┅ৡৢ͜͡✦═╯*`, fkontak, m)}

if (/^اريد بوت|كيف يمكنني اخد بوت لجروبي?|هل البوت مجاني?|quiero un bot|solicitud|solicitó bot|solicito bot|Necesito un bot|necesito un bot$/i.test(m.text) ) {
conn.reply(m.chat,  `\`⚡¿Quieres un bot para tu grupo?\`

*🐈 لديك عده اختيارات جرب بنفسك:*
* #instalarbot

*🧡 عشان تعمل بوت علي رقمك خاص بيك:*
* #serbot (escanea el QR) 
* #jadibot --code (Código de 8 dígitos)

*💖 Puedes solicitarlo haciendo una donación voluntaria a través de PayPal o Mercado Pago arg.*
ممنوع اضافه البوت جروب من دون اذن مطوره 
> 🚀 االبوت شغال طول اليوم



\`⏩ Siguiente paso ⏩\`

> Una vez realizado el pago, puedes enviar un comprobante de envío del dinero (captura de pantalla) para que pueda agregar el bot a tu grupo:

• https://chat.whatsapp.com/FDRfhecUGrCEQswkg8FUYz
• ${ig}
• https://www.facebook.com/elrebelde21

\`⚡ ¿االبوت شغال 24/7?\`
_*Sí, nuestro bot está alojado en un servidor de pago para mantenerlo activo 24/7 (por eso también solicitamos donaciones para mantenerlo en funcionamiento) 💞*_

> *𝙂𝙧𝙖𝙘𝙞𝙖𝙨 𝙥𝙤𝙧 𝙨𝙪𝙨 𝙥𝙧𝙚𝙛𝙚𝙧𝙚𝙣𝙘𝙞𝙖𝙨 𝙚𝙣 ${gt} 🐈💞*`, fkontak, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `Hola ${name} 👋`, body: wm, previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})}
 
if (/^ما هو البوت|يعني ايه بوت|هل هذا بوت|qué es Bot|QUÉ ES UN BOT|¿QUÉ ES UN BOT?|¿qué es un Bot?|qué es un Bot|que es un Bot|Qué es un Bot?|Que es un Bot? $/i.test(m.text) ) {
conn.reply(m.chat, `\`✨ ¿𝐐𝐮𝐞́ 𝐞𝐬 𝐮𝐧 𝐁𝐨𝐭 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩? ✨\`

🍃 _الروبوت عبارة عن ذكاء مبرمج يسمح لك بتنفيذ الأنشطة حسب ما تطلبه. في سمات الواتساب من الممكن إنشاء ملصقات وتنزيل الموسيقى ومقاطع الفيديو وإنشاء الشعارات والبحث عن الصور والتفاعل في وضع المحادثة والمشاركة في الألعاب داخل الدردشات وما إلى ذلك..._
البوت شغال معاك طول النهار بس لو كترت عليه هفشخك
🍃 *_لو عاوز تعرض كل الاوامر اكتب:_*
#menu
#اوامر
🐈 𝙂𝙊𝙅𝙊-𝘽𝙊𝙏 🐈`, m)}  
return !0 
}
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
