import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
import applicationRoutes from './routes/application.routes.js'
import { authMiddleware } from './middleware/auth.middleware.js';

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes);

app.use('/api/applications', applicationRoutes)

app.get("/api", (req, res) => {
    res.json({
        message: 'HunterApp API работает'
    })
})

app.get("/api/test", authMiddleware, (req, res) => {
    res.json({
        message: "Доступ разрешен",
        userId: req.userId
    })
})

export default app;