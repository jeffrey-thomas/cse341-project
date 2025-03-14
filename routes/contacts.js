import Router from 'express'
import { contactsController } from '../controllers/contacts.js'

export const contactsRouter = Router();

contactsRouter.get('/',contactsController.getAll);

contactsRouter.get('/:id',contactsController.getSingle);