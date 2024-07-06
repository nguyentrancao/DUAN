import express from 'express'
import { cartController } from '~/controllers/cardController'

const Router = express.Router()

Router.route('/add')
  .post(cartController.addCartItem)
Router.route('/all')
  .get(cartController.getAllCartItems)
Router.route('/remove/:slug')
  .delete(cartController.deleteCartItem)

export const cartRoute = Router