import mongoose from "mongoose"

const Schema = mongoose.Schema

const artistSchema = new Schema ({
  name: String,
  age: Number,
  handedness: String,
  artwork: [artworkSchema],
})

const Artist = mongoose.model("Artist", artistSchema)

export {
  Artist
}