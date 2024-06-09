import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { testConnection,query } from './database/db.js'
import router from './route/index.js'

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

app.use(router)

app.listen(process.env.APP_PORT,()=>{
    testConnection()
    console.log(`Server is running on http://localhost:${process.env.APP_PORT}`)
})