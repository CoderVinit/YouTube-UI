import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String
    },
    subscriber: {
        type: Number,
        default: 0
    },
    subscribedUsers: {
        type: [String]
    },
},
    { timeStamps: true }

);



export default mongoose.model("User", UserSchema);