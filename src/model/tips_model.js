import db from "../database/db.js"

let id = 0

class Tips {
    constructor() {

    }

    validaTip = (tip) => {
        if (tip.length != "") {
            return tip
        } else {
            throw new Error("Insira uma dica")
        }
    }

    insereTip = (tip) => {
        this.id = id++
        this.tip = this.validaTip(tip)

        db.tip.push(this)
    }

    pegaTip = () => {
        return db.tip[(Math.random() * db.tip.length) | 0]
    }

    deletarTip = () => {

    }
}

export default Tips