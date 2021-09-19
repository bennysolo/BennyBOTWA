const { WAConnection, MessageType, WAMessageProto, Presence, MessageOptions, WA_DEFAULT_EPHEMERAL, Mimetype, Browsers, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, GroupSettingChange, waChatKey, mentionedJid, processTime } = require("@adiwajshing/baileys")
const _0x1ae9e9=_0x2d44;(function(_0x1dffae,_0x3ba43){const _0xa6d0d7=_0x2d44,_0x2bb016=_0x1dffae();while(!![]){try{const _0x2ea8db=-parseInt(_0xa6d0d7(0xb1))/0x1+-parseInt(_0xa6d0d7(0xb5))/0x2+parseInt(_0xa6d0d7(0xb4))/0x3*(parseInt(_0xa6d0d7(0xb3))/0x4)+parseInt(_0xa6d0d7(0xac))/0x5+parseInt(_0xa6d0d7(0xae))/0x6+parseInt(_0xa6d0d7(0xb2))/0x7+parseInt(_0xa6d0d7(0xad))/0x8*(-parseInt(_0xa6d0d7(0xb0))/0x9);if(_0x2ea8db===_0x3ba43)break;else _0x2bb016['push'](_0x2bb016['shift']());}catch(_0x31ffd6){_0x2bb016['push'](_0x2bb016['shift']());}}}(_0x5e70,0xbd17e));const readline=require(_0x1ae9e9(0xaa)),rl=readline[_0x1ae9e9(0xab)]({'input':process[_0x1ae9e9(0xaf)],'output':process[_0x1ae9e9(0xb6)]});function _0x2d44(_0x3d04dd,_0x14ced0){const _0x5e7055=_0x5e70();return _0x2d44=function(_0x2d4458,_0x228072){_0x2d4458=_0x2d4458-0xaa;let _0x2cf914=_0x5e7055[_0x2d4458];return _0x2cf914;},_0x2d44(_0x3d04dd,_0x14ced0);}function _0x5e70(){const _0x15591c=['stdout','readline','createInterface','650470mgDKSy','24KcBbCG','8258628OLkRmD','stdin','4362786oEQskd','811187LRdcFJ','10174374LXSano','21388LSfzXN','423UlwVXO','1347932kdWSOp'];_0x5e70=function(){return _0x15591c;};return _0x5e70();}
const {mp3, mp4, gif } = Mimetype
const moment = require('moment-timezone');
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss DD:MM:YYYY");
const fs = require('fs')
const {color} = require('./lib/color')
const qrcode = require("qrcode-terminal")

var _0x23815e=_0x12a7;(function(_0x29d49a,_0x197e57){var _0xedbba4=_0x12a7,_0x49407b=_0x29d49a();while(!![]){try{var _0x4ad5f9=parseInt(_0xedbba4(0x12c))/0x1*(-parseInt(_0xedbba4(0x126))/0x2)+parseInt(_0xedbba4(0x13b))/0x3*(-parseInt(_0xedbba4(0x135))/0x4)+-parseInt(_0xedbba4(0x129))/0x5+-parseInt(_0xedbba4(0x12b))/0x6*(parseInt(_0xedbba4(0x139))/0x7)+parseInt(_0xedbba4(0x12f))/0x8*(parseInt(_0xedbba4(0x134))/0x9)+-parseInt(_0xedbba4(0x128))/0xa*(parseInt(_0xedbba4(0x132))/0xb)+parseInt(_0xedbba4(0x13c))/0xc;if(_0x4ad5f9===_0x197e57)break;else _0x49407b['push'](_0x49407b['shift']());}catch(_0x3a8a19){_0x49407b['push'](_0x49407b['shift']());}}}(_0x2bce,0x96ef7));if(!process[_0x23815e(0x138)][0x2])rl[_0x23815e(0x13d)](color('Masukan\x20nama\x20session:\x20',_0x23815e(0x12e)),_0x22904d=>{var _0x7e2db4=_0x23815e;console['log']('\x20\x20'),!fs[_0x7e2db4(0x13a)]('./'+_0x22904d+_0x7e2db4(0x12d))?console['log'](color('[\x20NEW\x20CLIENT\x20]',_0x7e2db4(0x131)),color(_0x7e2db4(0x137),_0x7e2db4(0x12e))+_0x22904d):console[_0x7e2db4(0x136)](color(_0x7e2db4(0x127),_0x7e2db4(0x131)),color(_0x7e2db4(0x133),_0x7e2db4(0x12e))+_0x22904d),sessionname=_0x22904d,rl[_0x7e2db4(0x130)](),newclient(sessionname);});else process[_0x23815e(0x138)][0x2]&&(sessionname=process['argv'][0x2],console[_0x23815e(0x136)]('\x20\x20'),!fs[_0x23815e(0x13a)]('./'+sessionname+_0x23815e(0x12d))?console[_0x23815e(0x136)](color(_0x23815e(0x12a),_0x23815e(0x131)),color(_0x23815e(0x137),_0x23815e(0x12e))+sessionname):console[_0x23815e(0x136)](color('[\x20CLIENT\x20]',_0x23815e(0x131)),color('Connecting\x20to\x20session:\x20','yellow')+sessionname),newclient(sessionname),rl[_0x23815e(0x130)]());function _0x12a7(_0x55dc56,_0xb85d2b){var _0x2bce04=_0x2bce();return _0x12a7=function(_0x12a7fb,_0x2dcab6){_0x12a7fb=_0x12a7fb-0x126;var _0x10b454=_0x2bce04[_0x12a7fb];return _0x10b454;},_0x12a7(_0x55dc56,_0xb85d2b);}function _0x2bce(){var _0x9fb810=['34829736vjtiYK','question','6HTfIog','[\x20CLIENT\x20]','30ttVjSK','2273030joWngU','[\x20NEW\x20CLIENT\x20]','1614HnIiSj','72923jtMqJM','.json','yellow','8rOcgbG','close','lime','2976413envpvH','Connecting\x20to\x20session:\x20','4247559hNtgmu','8452QPUgew','log','Creating\x20new\x20session:','argv','26698KfJRKZ','existsSync','348AkzLxI'];_0x2bce=function(){return _0x9fb810;};return _0x2bce();}

const newclient = async (ses) => {
const starts = async (benny = new WAConnection()) => {
    benny.logger.level = 'warn'
    benny.version = [2, 2123, 8]
    benny.browserDescription = Browsers.ubuntu('Safari')
    benny.on('qr', () => {
         console.log(`[ ${time} ] Sqan Qr nih`)
   console.log(color('B', 'green'), color('e', 'red'), color('n', 'yellow'), color('n', 'purple'), color('y', 'blue'), color('BOT', 'cyan'))
   console.log(color('SUPPORT by https://pecundang.herokuapp.com', 'cyan'))
    })

    fs.existsSync(`./${ses}.json`) && benny.loadAuthInfo(`./${ses}.json`)
    benny.on('connecting', () => {
        console.log(color('Connecting...', 'yellow'))
    })
    benny.on('open', () => {
        console.log(color('Connected!', 'lime'))
    })
    await benny.connect({timeoutMs: 30*1000})
        fs.writeFileSync(`./${ses}.json`, JSON.stringify(benny.base64EncodedAuthInfo(), null, '\t'))
	console.log(benny.user.jid.split('@')[0])
	
	benny.on('chat-update', async (msg) => {
		require('./msgHndlr')(benny, msg)
	})
	
}
starts()
}
