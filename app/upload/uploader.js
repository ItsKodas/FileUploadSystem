const fs = require('fs')

module.exports = function (app) {

    app.get('/', async function (req, res) {
        
        var uploads = await fs.readdirSync('./uploads')
        
        res.render('index', { uploads })
    })

    app.post('/upload', async function (req, res) {
        try {
            if (!req.files) {
                res.send({
                    status: false,
                    message: 'No file uploaded'
                });
            } else {
                //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
                let avatar = req.files.avatar;

                //Use the mv() method to place the file in upload directory (i.e. "uploads")
                avatar.mv('./uploads/' + avatar.name);

                //send response
                res.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: avatar.name,
                        mimetype: avatar.mimetype,
                        size: avatar.size
                    }
                });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    })

}