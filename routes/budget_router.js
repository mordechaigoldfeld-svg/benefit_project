import express from "express"
import { newBudget } from "../services/service_budget.js"
import { bodyExists } from "../midllewear/bodyValidator.js"


const router =express.Router()

export default router


// router.post("/:id/spend")


router.post("/",bodyExists,newBudget)

// router.get("/:id/transacsions")

// router.get("/")



