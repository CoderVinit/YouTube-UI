import jwt from "jsonwebtoken";

export const tokenvarify = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(405).json({ massage: "You ara not authenticated!" })

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return res.status(405).json({ err });
        req.user = user;
        next()
    });
};