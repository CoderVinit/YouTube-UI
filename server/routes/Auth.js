import express from 'express'
import { signUp, signin } from '../controllers/Auth-controller.js';

const router = express.Router();

// Create a User

router.post("/signup", signUp)

// Signin user

router.post("/signin", signin)

//google signin

router.post("/google",)

export default router;