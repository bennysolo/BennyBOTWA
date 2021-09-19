const fetch = require('node-fetch')
const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const { fromBuffer } = require('file-type')

/**
 * Fetch Json from Url
 * 
 * @param {String} url 
 * @param {Object} options 
 */
 const fetchJson = async (url, options) => {
	try {
		options ? options : {method: 'GET'}
		const res = await fetch(url, options)
		const json = await res.json()
		return json
	} catch (e) {
		console.log(`Error bang: ${e}`)
	}
}
	
	
const getBase64 = async (url) => {
    const response = fetch(url, { headers: { 'User-Agent': 'okhttp/4.5.0' } });
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    const buffer = await response.buffer();
    const videoBase64 = `data:${response.headers.get('content-type')};base64,` + buffer.toString('base64');
    if (buffer)
        return videoBase64
}

/**
 *Fetch Text from Url
 *  
 * @param {String} url 
 * @param {Object} options 
 */
const fetchText = (url, options) => {
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(response => response.text())
            .then(text => resolve(text))
            .catch(err => {
                console.log(err)
                reject(err)
            })
    })
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

/**
 * Upload image to Telegra.ph server
 * @param {String} buffData image buffer
 */
const uploadImages = (buffData, fileName) => {
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const filePath = `src/${fileName}.${ext}`
        fs.writeFile(filePath, buffData, { encoding: 'base64' }, (err) => {
            if (err) reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, `${fileName}.${ext}`)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.error) reject(result.error)
                    resolve('https://telegra.ph' + result[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch((err) => reject(err))
        })
    })
}

module.exports = {
    fetchJson,
    fetchText,
    getBase64,
    getBuffer,
    uploadImages
}
