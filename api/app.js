import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { read, write } from './db.js'

const db = read()

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send({ gsoTable: 'good', })
})

app.listen(8081, () => {
    console.log('App\'s running on port 8081')
})
