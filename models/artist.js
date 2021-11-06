import mongoose from "mongoose"

const Schema = mongoose.Schema

const artworkSchema = new Schema ({ 
  titleOfPiece: String,
  size: Number,
  medium: String,
  Surface: String,
  //comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
})

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