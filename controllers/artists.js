import { Artist } from "../models/artist.js"

function index (req, res) {
  Artist.find({})
  .then(artists => {
    res.render("artists/index", {
      artists,
      title: "Artists"
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

function edit (req, res) {
  Artist.findById(req.params.id)
  .then(artist => {
    res.render("artists/edit", {
      title: "Edit an Artist",
      artist
    })
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
  // console.log("We've arrived to the comment place")
  console.log(req.params)
  Artist.findById(req.params.id)
  .then(artist => {
    console.log(artist.artwork)
    const artwork = artist.artwork.find(function(work) {
      return work._id.equals(req.params.artworkId)
    })
    console.log("Artwork", artwork)
    res.render("artists/comments", {
      artist,
      title: "Details",
      artwork
    })
  })
}

function writeComment (req, res) {
  const artistId = req.params.id
  const artworkId = req.params.artworkId
  Artist.findById(artistId)
  .then(artist => {
    let artArray = artist.artwork
    let obj = artArray.find(piece => {
      piece._id == artworkId
      // console.log(piece._id)
      return piece._id
    })
    obj.comments.push(req.body)
    // console.log(obj)
    artist.save()
    .then(()=> {
    res.render("artists/comments", {
      artist,
      title: "Details"
      })
    })
  })
}

function deleteComment (req, res) {
  const artistId = req.params.id
  const artworkId = req.params.artworkId
  Artist.findById(artistId)
  .then(artist => {
    let artArray = artist.artwork
    let obj = artArray.find(piece => {
      piece._id == artworkId
      // console.log(piece._id)
      return piece._id
    })
    obj.comments.remove(req.params.commentId)
    console.log(req.body.id)
    console.log(obj)
    artist.save()
    .then(() => {
      res.redirect(`/artists/${artistId}/artwork/${artworkId}`)
      // res.render("artists/comments", {
      //   artist,
      //   title: "Details",
      //   artwork
      // })
    })
  })  
}

function update (req, res) {

}

export {
  index,
  create,
  show,
  addArtwork,
  details,
  writeComment,
  deleteComment as delete,
  edit,
  update
}