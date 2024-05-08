import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
    image: {
        type: String, // Assuming the image will be stored as a URL
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('posts', postSchema);

export default Post