import User from "../models/User.js";
import Video from "../models/Video.js";

export const update = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            return res
                .status(201)
                .json({ message: "Updated successfully", data: { updatedUser } });
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(403).send("You can only update by your id");
    }
};

export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndRemove(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json({ updatedUser });
        } catch (err) {
            console.log(err);
        }
    } else {
        return res
            .status(403)
            .json({ massage: "You can delete only by your account!" });
    }
};
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
    }
};
export const subscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $push: { subscribedUsers: req.params.id },
        });
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscriber: 1 },
        });
        res.status(200).json({ massage: "subscription successfully" })
    } catch (error) {
        return res.status(401).json({ error })
    }
};
export const unsubscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $pull: { subscribedUsers: req.params.id },
        });
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscriber: -1 }
        });
        res.status(200).json({ massage: "Unsubscription successfully" })
    } catch (error) {
        console.log(error);
    }
};
export const like = async (req, res, next) => {
    const id = req.user.id;
    const videoId = req.params.videoId;
    try {
        await Video.findByIdAndUpdate(videoId, {
            $addToSet: { likes: id },
            $pull: { dislikes: id }
        })
        res.status(200).json({ massage: "The video has been liked!" })
    } catch (error) {
        console.log(error);
    }
};
export const dislike = async (req, res, next) => {
    const id = req.user.id;
    const videoId = req.params.videoId;
    try {
        await Video.findByIdAndUpdate(videoId, {
            $addToSet: { dislikes: id },
            $pull: { likes: id }
        })
        res.status(200).json({ massage: "The video has been disliked!" })
    } catch (error) {
        console.log(error);
    }
};
