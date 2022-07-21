import Tips from "../model/tips_model.js"

const tips_Controller = (app) => {

    app.get('/tips', (req, res) => {
        const tip = new Tips()

        res.json({
            "msg": tip.pegaTip()
        })
    })

    app.post('/tips ', (req, res) => {
        const body = req.body
        const tip = new Tips()
        tip.insereTip(body.tip)
        res.json(tip)

    })
}

export default tips_Controller