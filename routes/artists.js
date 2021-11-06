import { Router } from 'express'
import passport from 'passport'

import * as artistsCtrl from "../controllers/artists.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get("/", artistsCtrl.index)

router.post("/", isLoggedIn, artistsCtrl.create)

export {
  router
}