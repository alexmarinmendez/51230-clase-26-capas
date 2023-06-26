import express from 'express'

const app = express()
app.get('/api/operaciones', (req, res) => res.send('ok!'))
app.get('/api/operaciones/suma', (req, res) => {
    const num1 = parseInt(req.query.num1)
    const num2 = parseInt(req.query.num2)
    res.json({ status: 'success', payload: num1 + num2 })
})

app.listen(8080, () => console.log('Server Up!'))