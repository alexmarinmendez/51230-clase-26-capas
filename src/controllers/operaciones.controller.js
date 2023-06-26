import { restar } from '../services/operaciones.service.js'

export const suma = (req, res) => {
    const num1 = parseInt(req.query.num1)
    const num2 = parseInt(req.query.num2)
    res.json({ status: 'success', payload: num1 + num2 })
}

export const resta = (req, res) => {
    const { num1, num2 } = req.query
    const result = restar(num1, num2)
    res.json({ status: 'success', payload: result })
}