import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

const app = express()

// CONFIG
//application/json
app.use(express.json())
//application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))
// Configure dotenv to load environment variables
dotenv.config();

// DUMMY
app.get('/', (req, res) => {
    return res.status(200).json({messages: ['Hola uachin']})
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`)
})