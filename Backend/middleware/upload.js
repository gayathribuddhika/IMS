const path = require('path')
const multer = require('multer')


var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images/')
    },
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var upload = multer ({
    storage: storage,
    folder : "images",
    allowedformats : ["jpeg", "jpg", "png"],
    // fileFilter: function(req, file, callback) {
    //     if(file.mimetype == "image/jpeg" || file.mimetype == "image/jpg" || file.mimetype == "image/png") {
    //         callback(null, true)
    //     } else {
    //         console.log("Only jpg or jpeg or png files are supported!")
    //         callback(null, false)
    //     }
    // },
    limits: {
        fileSize: 1024 * 1024 * 2 
    }
})

module.exports = upload