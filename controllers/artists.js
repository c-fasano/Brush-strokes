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
  Artist.findById(req.params.id)
  .then(artist => {
    res.render("artists/show", {
      artist,
      title: "Artist Home Page"
    })
  })
}

function addArtwork (req, res) {
  console.log("Adding artwork")
  console.log(req.body)
  Artist.findById(req.params.id)
  .then(artist => {
    artist.artwork.push(req.body)
    artist.save()
    .then(()=> {
      res.redirect(`/artists/${artist._id}`)
    })
  })
}

function details (req, res) {
  console.log("We've arrived to the comment place")
  Artist.findById(req.params.id)
  .then(artwork => {
    res.render("artists/comments", {
      artwork
    })
  })
}

export {
  index,
  create,
  show,
  addArtwork,
  details
}