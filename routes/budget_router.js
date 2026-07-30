import express from "express"
import { bodyExists } from "../midllewear/bodyValidator.js"
import { insertBudget,getTransaction,postTransaction } from "../controler/budget_cntrl.js"


const router =express.Router()

export default router


router.post("/:id/spend",bodyExists,postTransaction)


router.post("/",bodyExists,insertBudget)


router.get("/:id/transaction",getTransaction)

// router.get("/:id/transacsions")

// router.get("/")



