
import Comment from "../models/Comments.js";
import Video from "../models/Video.js"

export const addComment = async (req, res, next) => {
    const newComment = new Comment({ userId: req.user.id, ...req.body })
    try {
        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
}
export const deleteComment = async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id)
        const video = await Video.findById(req.params.id)

        if (req.user.id === comment.userId || req.params.id === video.userId) {
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).json({ massage: "Comment has been deleted!" })
        }
        else {
            return res.status(404).json("You con only delete your comments!")
        }

    } catch (error) {
        console.log(error);
    }
}
export const getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find({ videoId: req.params.videoId });
        res.status(200).json(comments)
    } catch (error) {
        console.log(error);
    }
}