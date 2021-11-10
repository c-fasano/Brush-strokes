import mongoose from "mongoose"

const Schema = mongoose.Schema

const artworkSchema = new Schema ({ 
  picture: String,
  titleOfPiece: String,
  size: String,
  medium: String,
  Surface: String,
  //comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
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