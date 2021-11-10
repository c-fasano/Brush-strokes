import { Router } from 'express'
import passport from 'passport'

import * as artistsCtrl from "../controllers/artists.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


//3000/artists
router.get("/", artistsCtrl.index)

//:3000/artists/:id
router.get("/:id", artistsCtrl.show)

//:3000/artists/:id/artwork/:id
router.get("/:id/artwork/:id", artistsCtrl.details)

//3000/artists
router.post("/", isLoggedIn, artistsCtrl.create)

//:3000/artists/:id/artwork
router.post("/:id/artwork", isLoggedIn, artistsCtrl.addArtwork)

router.post("/:id/artwork/:id/comments", isLoggedIn, artistsCtrl.writeComment)

export {
  router
}