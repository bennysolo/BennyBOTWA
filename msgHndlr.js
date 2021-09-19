const { MessageType, WAMessageProto, Presence, MessageOptions, WA_DEFAULT_EPHEMERAL, Mimetype, Browsers, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, GroupSettingChange, waChatKey, mentionedJid, processTime } = require("@adiwajshing/baileys")
const {text, document, location, liveLocation, contact, contactsArray, buttonsMessage, listMessage, video, sticker, audio, product, extendedText, groupInviteMessage } = MessageType
const {color} = require('./lib/color')
const {getBuffer} = require('./lib/functions')
const {fetchJson} = require('./lib/fetcher')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./config.json'))
let ownerNumber = config.ownerNumber
const getPP = async (jid) => {
	try {
					ppnya = await benny.getProfilePicture(jid)
				} catch {
					ppnya = 'https://i.ibb.co/0qDXtBb/c8ef383d9fa8.jpg'
				}
				return ppnya
}

const msga = (message) => {
                if (message.length >= 10){
                    return `${message.substr(0, 10)}`
                }else{
                    return `${message}`
                }
        }

/**DATABASE*/
var presen = false
var pren = 'recording'
var namabot = 'BennyBOT'

module.exports = benny = async(benny, ben) => {
	try {
		if (!ben.hasNewMessage) return
        ben = ben.messages.all()[0]
		if (ben.key.id.startsWith('3EB0') && ben.key.id.length === 12) return
		if (presen) {
		benny.updatePresence(ben.key.remoteJid, pren)
		}
		const isGroup = ben.key.remoteJid.endsWith('g.us')
		const content = JSON.stringify(ben.message)
		const sender = ben.key.fromMe ? benny.user.jid : isGroup ? ben.participant : ben.key.remoteJid
		var from = ben.key.remoteJid
		const groupMetadata = isGroup ? await benny.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const type = Object.keys(ben.message)[0]
const pushname = (sender === benny.user.jid) ? benny.user.name : benny.contacts[sender].notify || benny.contacts[sender].vname || 'Tidak Terbaca'
		budy = (type === 'conversation') ? ben.message.conversation : (type === 'extendedTextMessage') ? ben.message.extendedTextMessage.text : ''
		prefix = /^[°zZ•π.'":÷×¶∆£¢€¥®™✓=;~ |!+<?#$%^&\/\\©^]/.test(budy) ? budy.match(/^[°zZ•π.'":÷×¶∆£¢€¥®™✓=;~ |!+<?#$%^&\/\\©^]/gi)[0] : '#'
		 button = (type == 'buttonsResponseMessage') ? ben.message.buttonsResponseMessage.selectedButtonId : ''
		 template = (type === "templateButtonReplyMessage") && ben.message.templateButtonReplyMessage.selectedId ? ben.message.templateButtonReplyMessage.selectedId : ''
body = (type === 'conversation' && ben.message.conversation.startsWith(prefix)) ? ben.message.conversation : (type == 'imageMessage') && ben.message[type].caption.startsWith(prefix) ? ben.message[type].caption : (type == 'videoMessage') && ben.message[type].caption.startsWith(prefix) ? ben.message[type].caption : (type == 'extendedTextMessage') && ben.message[type].text.startsWith(prefix) ? ben.message[type].text : (type === "templateButtonReplyMessage") && ben.message.templateButtonReplyMessage.selectedId ? ben.message.templateButtonReplyMessage.selectedId : (type == 'listResponseMessage') && ben.message[type].singleSelectReply.selectedRowId ? ben.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && ben.message[type].selectedButtonId ? ben.message.buttonsResponseMessage.selectedButtonId : ""
let command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = body.slice(command.length+2)
		
		 const reply = async(teks) => {
			 benny.sendMessage(from, teks, text, {quoted: ben})
		 }
	
	mess = {
			wait: '[ WAIT ] Sedang di proses ...⏳',
			success: 'Berhasil!',
			error: {
				stick: 'Maaf, terjadi kesalahan saat convert gambar ke sticker',
				Iv: 'Linknya mati:v',
				api: 'Error'
			},
			only : {
				pc: 'Perintah ini hanya bisa digunakan di private chat saja!',
				Registered: `Kamu belum terdaftar di database!\n\nSilakan register dengan format:\n*${prefix}daftar*\n\nNote:\nHarap save nomor ku agar bisa mendapatkan serial!!`,
				group: 'Grup only bruh...',
				ownerG: 'Owner grup only bruh...',
				ownerB: `*[ Khusus owner ${namabot} ]*`,
				creator: `*[ Khusus creator ${namabot} ]*`,
				admin: '*[ Khusus admin group ]*',
				premium: `Premium user only bruh...\nMau jadi user premium?\nChat wa.me/6289636006352`,
				Badmin: 'Jadikan bot admin terlebih dahulu!'
			}
		}
		
		
		if (isCmd) console.log(color('[ COMMAND ]', 'lime'), color(command, 'cyan'), color('from', 'yellow'), color(sender.split('@')[0], 'magenta'))
		if (!isCmd && !isGroup) console.log(color('[ PRIVATE ]', 'lime'), color(msga(budy), 'cyan'), color('from', 'yellow'), color(sender.split('@')[0], 'magenta'))
		if (!isCmd && isGroup) console.log(color('[ GROUP ]', 'lime'), color(msga(budy), 'cyan'), color('from', 'yellow'), color(sender.split('@')[0], 'magenta'), color('in', 'orange'), color(groupName, 'pink'))
		
		switch (command) {
		case 'menu':
		case 'help':
				let poy = 1
	menunye = `*Hai kak ${pushname} ${decodeURI('%F0%9F%91%8B')}*\n*Nama aku adalah*\n*${namabot}*\n*Source: https://github.com/bennysolo/BennyBOTWA*\n*Aku terdapat beberapa fitur yang sangat berguna*\n*Dibawah ini:*
*${poy++}.* ${prefix}owner
*${poy++}.* ${prefix}sc
*${poy++}.* ${prefix}artinama
*${poy++}.* ${prefix}artimimpi`
 ppimg = await getPP(sender)
gambar = await getBuffer(ppimg)
gbutsan = [
  {buttonId: '#api', buttonText: {displayText: 'REST API'}, type: 1},
  {buttonId: '#owner', buttonText: {displayText: 'OWNER'}, type: 1}
]
mhan = await benny.prepareMessage(from, {name: namabot, jpegThumbnail: gambar}, location, {thumbnail: gambar})
 gbuttonan = {
locationMessage: mhan.message.locationMessage,
    contentText: menunye,
    footerText: '@0',
    buttons: gbutsan,
    headerType: 'LOCATION'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben, contextInfo:{mentionedJid: [sender, '0@s.whatsapp.net']}})
	break
	case 'artimimpi':
	if (!arg) return reply('Masukan mimpi nya!')
		let mimpi = await fetchJson(`https://cililitan.herokuapp.com/api/artimimpi?mimpi=${encodeURIComponent(arg)}`)
	reply(nama.result)
break
	case 'artinama':
	if (!arg) return reply('Masukan namanya!')
	let nama = await fetchJson(`https://cililitan.herokuapp.com/api/artinama?nama=${encodeURIComponent(arg)}`)
	reply(nama.result)
break
case 'owner':
const vcard = 'BEGIN:VCARD\n'
            + `VERSION:3.0\n`
            + `FN:Owner ${namabot} \n` // GANTI NAMA LU
            + `ORG:Owner ${namabot};\n`
            + `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('@s.whatsapp.net', '')}:+${ownerNumber.replace('@s.whatsapp.net', '')}\n` // GANTI NOMOR LU
            + `END:VCARD`
			anub = await benny.sendMessage(from, {displayName: `Owner ${namabot}`, vcard: vcard}, contact, {quoted: ben})
			benny.sendMessage(from, 'Itu nomor ownerku', text, {quoted: anub})
				}
				
	}catch (e) {
	console.log(String(e))
		}
		}