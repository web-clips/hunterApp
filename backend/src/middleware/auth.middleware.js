import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({
                message: "Нет токена"
            })
        }
        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "Некорректный токен"
            })
        }
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        )
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({
            message:"Недействительный или просроченный токен"
        })
    }
}