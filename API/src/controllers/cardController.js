import { cardModel } from '~/models/cardModel'


const addCartItem = async (req, res) => {
  await cardModel.addItemToCart(req, res)
}
const getAllCartItems = async (req, res) => {
  await cardModel.getAllCart(req, res)
}

const deleteCartItem = async (req, res) => {
  await cardModel.removeItemCart(req, res)
}
export const cartController = {
  addCartItem,
  getAllCartItems,
  deleteCartItem
}