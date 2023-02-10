import express from 'express'
import cors from 'cors'

import allNotes from '../src/data/allNotes.js'
import pendingNotes from '../src/data/pendingNotes.js'

const  app = express()
app.use(cors())
app.use(express.urlencoded({extended: false}))


app.get('/getNotes', (req,res) => {
  setTimeout(() => {
    res.json({notes: allNotes})
  }, 3000)
})

app.get('/getNotes2', (req,res) => {
  setTimeout(() => {
    res.json({notes: pendingNotes})
  }, 3000);
})

app.listen(3000, () => {
  console.log('sever on port: 3000')
})