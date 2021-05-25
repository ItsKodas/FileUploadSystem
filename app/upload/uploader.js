module.exports = function (app) {
    
    app.get('/', async function (req, res) {
        res.render('index')
    })

    app.post('/upload', async function (req, res) {
        console.log(req.body)

        res.status(200).end()
    })

}