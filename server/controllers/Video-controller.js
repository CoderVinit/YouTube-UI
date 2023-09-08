import User from "../models/User.js";
import Video from "../models/Video.js";


export const addVideo = async (req, res, next) => {
    const newVideo = new Video({ userId: req.user.id, ...req.body })
    try {
        const savedVideo = await newVideo.save();
        res.status(200).json(savedVideo);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
}
export const updateVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return res.status(404).json({ massage: "No video Found!" })
        if (req.user.id === video.userId) {
            const updatedVideo = await Video.findOneAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(200).json(updateVideo);
        }
        else {
            return res.status(404).json({ massage: "You can update only your video!" })
        }
    } catch (error) {
        return res.status(404).json({ error: error })
    }
}
export const deleteVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return res.status(404).json({ massage: "No video Found!" })
        if (req.user.id === video.userId) {
            const deletedVideo = await Video.findOneAndDelete(req.params.id)
            res.status(200).json({ massage: "Your Video has been deleted" });
        }
        else {
            return res.status(404).json({ massage: "You can delete only your video!" })
        }
    } catch (error) {
        return res.status(404).json({ error: error })
    }
}

export const getVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id);
        res.status(200).json(video)
    } catch (error) {
        console.log(error);
    }
}
export const addViews = async (req, res, next) => {
    try {
        await Video.findByIdAndUpdated(req.params.id, {
            $inc: { views: 1 }
        });
        res.status(200).json({ massage: "The View has been increased!" })
    } catch (error) {
        console.log(error);
    }
}
export const getTrends = async (req, res, next) => {
    try {
        const videos = await Video.find().sort({ views: -1 })
        res.status(200).json(videos)
    } catch (error) {
        console.log(error);
    }
}
export const getRandom = async (req, res, next) => {
    try {
        const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
        res.status(200).json(videos)
    } catch (error) {
        console.log(error);
    }
}
export const getSubscribed = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        const subscribedChennels = user.subscribedUsers;

        const list = await Promise.all(
            subscribedChennels.map((channelId) => {
                return Video.find({ userId: channelId })
            })
        )
        res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));

    } catch (error) {
        console.log(error);
    }
}

export const getByTags = async (req, res, next) => {
    const tags = req.query.tags.split(",")
    console.log(tags);
    try {
        const videos = await Video.find({ tags: { $in: tags } }).limit(20);
        res.status(200).json(videos)
    } catch (error) {
        console.log(error);
    }
}
export const search = async (req, res, next) => {
    const query = req.query.q
    try {
        const videos = await Video.find({
            title: { $regex: query, $options: "i" },
        }).limit(40);
        res.status(200).json(videos)
    } catch (error) {
        console.log(error);
    }
}