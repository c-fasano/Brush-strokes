import { Artist } from "../models/artist.js"

function index (req, res) {
  Artist.find({})
  .then(artists => {
    res.render("artists/index", {
      artists,
      title: "Isn't this great!"
    })
  })
}

function create (req, res) {
  console.log("Works")
  req.body.owner = req.user.profile._id
  Artist.create (req.body)
  .then(artist => {
    res.redirect("/artists")
  })
  .catch(error => {
    console.log(error)
    res.redirect("/artists")
  })
}

function show (req, res) {
  console.log("Show me the art")
}

export {
  index,
  create,
  show
}