const tipsController = (app) => {

    app.get('/tips', (req, res) => {
        res.json({
            "msg": 'dica recebida'
        })
    })

    app.post('/create', (req, res) => {
        // req.body
        console.log(req.body)
        res.json({
            "body": req.body
        })

    })
}

export default tipsController