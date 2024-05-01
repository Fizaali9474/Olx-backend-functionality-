import jwt from 'jsonwebtoken'
import jwtSecret from "../config/jwt.mjs"

function verifyToken(req, res, next) {
    try {
        const token = req.headers.authorization.slice(10)
        jwt.verify(token, jwtSecret)
        next()
    } catch (e) {
        res.send({ message: "Invalid Token" })
    }
}

export default verifyToken