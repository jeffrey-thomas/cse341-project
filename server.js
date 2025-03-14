import express from 'express'
import { router } from './routes/index.js';
import 'dotenv/config.js'

const port = process.env.PORT || 3000;
const app = express();

app.use('/',router)

app.listen(port, ()=>{console.log(`Listening on port ${3000}`)});