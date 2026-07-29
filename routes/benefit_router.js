import express from "express"
import { insertRecord,getSoldier } from "../controler/benefit_cntrl.js"
import { bodyExists } from "../midllewear/bodyValidator.js"


const router  = express.Router()

export default router


router.post("/:soldierId/benefits",bodyExists,insertRecord)


router.get("/:soldierId/benefits",getSoldier)