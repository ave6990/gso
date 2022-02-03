import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { read, write } from './db.js'

const db = read()

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send(db)
})

app.post('/', async (req, res) => {
    try {
        const data = await req.files
        console.log(file)
        res.send({status: 200})
    } catch (err) {
        console.log('An error has occured!')
        console.log(err)
    }
})

app.listen(8081, () => {
    console.log('App\'s running on port 8081')
})
