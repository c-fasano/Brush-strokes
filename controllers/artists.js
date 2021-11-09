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
  // Artist.findById(req.params.id) 
  // .then(artist => {
  //   artist.artwork.push(req.body)
  //   res.redirect("/artist/:id")
  // })
  // .catch (error => {
  //   res.redirect("/artist/:id") //template literal so artists id is read as the actual id instead of the string ":id"
  // })
}



export {
  index,
  create,
  show,
  addArtwork
}