import mongoose from "mongoose"

const Schema = mongoose.Schema

const commentSchema = new Schema ({
  author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  content: {
    type: String,
    required: true
},
})

const artworkSchema = new Schema ({ 
  picture: String,
  titleOfPiece: String,
  size: String,
  medium: String,
  Surface: String,
  comments: [commentSchema]
})

const artistSchema = new Schema ({
  picture: String,
  name: String,
  age: Number,
  handedness: String,
  artwork: [artworkSchema],
})

const Artist = mongoose.model("Artist", artistSchema)

export {
  Artist
}