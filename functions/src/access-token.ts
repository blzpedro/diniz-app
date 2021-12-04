import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config()

export function generateAccessToken(user: any) {
    return jwt.sign(user, process.env.TOKEN_SECRET);
}

export function decodeJWT(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ error: 'No token provided.' });

    jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
        if (err) return res.status(500).json({ error: 'Failed to authenticate token.' });

        req.user = decoded
        next()
    });
}