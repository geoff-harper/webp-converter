const fs = require('fs')
const webp =require('webp-converter')

const webpDir = './webp/'
const jpgDir = './jpg/'


fs.readdir(webpDir, (err, files) => {
  files.forEach(file => {
    const fileRoot = file.split('.')[0]
    webp.dwebp(`./webp/${file}`, `./jpg/${fileRoot}.jpg`, '-o', status => {
      console.log(status)
    })
  })
})
