import { Router } from 'express'
import passport from 'passport'

import * as artistsCtrl from "../controllers/artists.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


//3000/artists
router.get("/", artistsCtrl.index)

router.get("/:id", artistsCtrl.show)

//3000/artists
router.post("/", isLoggedIn, artistsCtrl.create)

//:3000/artists/:id/artwork
router.post("/:id/artwork", isLoggedIn, artistsCtrl.addArtwork)
//is this route correct?

export {
  router
}