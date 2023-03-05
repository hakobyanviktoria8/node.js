const mongoose = require("mongoose");
const users = require("./users");
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const PostSchema = new Schema(
  {
    title: String,
    description: String,
    auther: { type: ObjectId, ref: "User" },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Posts", PostsSchema);
