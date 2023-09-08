import express from 'express'
import { addComment, deleteComment, getComments } from '../controllers/Comment-controller.js';
import { tokenvarify } from '../varifytoken.js';

const router = express.Router();

router.post("/", tokenvarify, addComment)
router.delete("/:id", tokenvarify, deleteComment)
router.get("/:videoId", getComments)


export default router;