import { Router } from 'express'
import passport from 'passport'

import * as artistsCtrl from "../controllers/artists.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


router.get("/", artistsCtrl.index)

router.get("/:id", artistsCtrl.show)

router.get("/:id/artwork/:artworkId", artistsCtrl.details)

router.get("/:id/edit", artistsCtrl.edit)

router.post("/", isLoggedIn, artistsCtrl.create)

router.post("/:id/artwork", isLoggedIn, artistsCtrl.addArtwork)

router.post("/:id/artwork/:artworkId/comments", isLoggedIn, artistsCtrl.writeComment)

router.put("/:id", isLoggedIn, artistsCtrl.update)

router.delete("/:id/artwork/:artworkId/comments/:commentId", isLoggedIn, artistsCtrl.delete)



export {
  router
}
