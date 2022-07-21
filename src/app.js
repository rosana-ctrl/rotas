import express from "express"

import tips_Controller from "./controller/tips_controller.js"
import middlewareController from "./middleware/middleware-controller.js"


const app = express()
const port = 3000
app.use(express.json())
// para retornar o objeto precisa dar send no insomnia e depois retornar aqui

// middlewareController(app)
tips_Controller(app)
app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})