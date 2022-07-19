const middlewareController = (app) => {
    app.use((req, res, next) => {
        // next -  é uma funcao que vai dizer se pode seguir com a requisicao ou nao
        console.log(req.header)
        // cabecalho da requisicao
        console.log(req.method)
        if (req.method != "GET") {
            if (req.headers.usertype === "gerente") {
                next()
            } else {
                res.json({
                    "erro": "usuario nao permitido"
                })
            }
        } else {
            next()
        }

    })
}

export default middlewareController