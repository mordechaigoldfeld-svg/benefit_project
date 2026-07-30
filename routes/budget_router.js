import express from "express"
import { bodyExists } from "../midllewear/bodyValidator.js"
import { insertBudget,getTransaction } from "../controler/budget_cntrl.js"


const router =express.Router()

export default router


// router.post("/:id/spend")


router.post("/",bodyExists,insertBudget)


router.get("/:id/transaction",getTransaction)

// router.get("/:id/transacsions")

// router.get("/")



