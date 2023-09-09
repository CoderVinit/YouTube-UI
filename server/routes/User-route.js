import express from 'express'
import { update, deleteUser, getUser, like, dislike, subscribe, unsubscribe } from '../controllers/User-controller.js';
import { tokenvarify } from '../varifytoken.js'

const router = express.Router();

// Update User 

router.put("/:id", tokenvarify, update)


// delete user 
router.delete("/:id", tokenvarify, deleteUser)

// getuser
router.get("/find/:id", getUser)

// subscribe user 
router.put("/subs/:id", tokenvarify, subscribe)

// unsubscribe a user 
router.put("/unsubs/:id", tokenvarify, unsubscribe)

// like a video 
router.put("/like/:videoId", tokenvarify, like)

// dislike a video 
router.put("/dislike/:videoId", tokenvarify, dislike)

export default router;