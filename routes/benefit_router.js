import express from "express"
import { insertRecord } from "../controler/benefit_cntrl.js"


const router  = express.Router()

export default router


router.post("/:soldierId/benefits",insertRecord)