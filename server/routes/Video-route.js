import express from 'express'
import { addVideo, addViews, deleteVideo, getByTags, getRandom, getSubscribed, getTrends, getVideo, search, updateVideo } from '../controllers/Video-controller.js';
import { tokenvarify } from '../varifytoken.js'

const router = express.Router();

router.post("/", tokenvarify, addVideo)
router.put("/:id", tokenvarify, updateVideo)
router.delete("/:id", tokenvarify, deleteVideo)
router.get("/find/:id", getVideo)
router.put("/view/:id", addViews)
router.get("/trend", getTrends)
router.get("/random", getRandom)
router.get("/subs", tokenvarify, getSubscribed)
router.get("/tags", getByTags)
router.get("/search", search)


export default router;