const express  = require('express')
require('dotenv').config()

const port = process.env.PORT
const connectDB = require('./config/db')

connectDB()

const app = express()


//body parser middlewear
app.use(express.json())
app.use(express.urlencoded({ extended: false}));

app.get('/',(req,res) =>{
  res.json({ message: 'welcome to my twitter app ' })
})
const ideasRouter = require('./routes/ideas')
app.use('/api/ideas', ideasRouter)


app.listen(port,() => console.log(`server listening on port ${port}`))