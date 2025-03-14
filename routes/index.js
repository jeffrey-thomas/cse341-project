import Router from 'express'
import { contactsRouter } from './contacts.js';

export const router = Router();

router.get('/',(req, res)=>{
    res.send('Hello World');
})

router.use('/contacts',contactsRouter)