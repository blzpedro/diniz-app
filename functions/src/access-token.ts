import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config()

export function generateAccessToken(user: any) {
    return jwt.sign(user, process.env.TOKEN_SECRET);
}