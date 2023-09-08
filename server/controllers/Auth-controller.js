import bcrypt from "bcryptjs"
import User from "../models/User.js";
import Jwt from "jsonwebtoken";



export const signUp = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash });
        await newUser.save();

    } catch (err) {
        console.log(err);
    }
    res.status(200).json({ massage: "User has been created!" });
}


export const signin = async (req, res, next) => {
    try {
        const user = await User.findOne({ name: req.body.name });
        if (!user) return res.status(404).json({ massage: "User not found!" });

        const isCorrect = await bcrypt.compare(req.body.password, user.password);

        if (!isCorrect) return res.status(400).json({ massage: "Wrong Credentials!" });

        const token = Jwt.sign({ id: user._id }, process.env.JWT);
        const { password, ...others } = user._doc;

        res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json(others);
    } catch (err) {
        console.log(err);;
    }
}