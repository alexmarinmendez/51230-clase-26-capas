import express from 'express'
import operacionesRouter from './routers/operaciones.router.js'

const app = express()
app.use('/api/operaciones', operacionesRouter)

app.listen(8080, () => console.log('Server Up!'))