
import express from 'express'
import { boardRoute } from './boardRoute'
import { boardController } from '~/controllers/boardController'
import { cartRoute } from './cartRoute'

const Router = express.Router()

Router.get('/', (boardController.getProduct))
Router.use('/boards', boardRoute)
Router.use('/cart', cartRoute )

export const APIs_V1 = Router