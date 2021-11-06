import { Router } from 'express'
import passport from 'passport'

import * as artistsCtrl from "../controllers/artists.js"

const router = Router()

router.get("/", artistsCtrl.index)



export {
  router
}