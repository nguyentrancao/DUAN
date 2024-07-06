
import Joi from 'joi'

const CARD_COLLECTION_NAME = 'cards'
const CARD_COLLECTION_SCHEMA = Joi.object({
  name: Joi.string().required(),
  slug: Joi.string().required(),
  qty: Joi.number().integer().min(0).required(),
  image: Joi.string().uri().required(),
  price: Joi.number().precision(2).positive().required(),
  color: Joi.string().required(),
  size: Joi.string().required(),
  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _destroy: Joi.boolean().default(false)
})
const addItemToCart = async (req, res) => {
  try {
    const { error } = CARD_COLLECTION_SCHEMA.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    let item = await CARD_COLLECTION_NAME.findOne({ slug: req.body.slug })
    if (item) {
      item.qty += req.body.qty
      item.updatedAt = Date.now()
    } else {
      item = new CARD_COLLECTION_NAME(req.body)
    }
    await item.save()
    res.send(item)
  } catch (err) {
    res.status(500).send(err.message)
  }
}
const getAllCart = async (req, res) => {
  try {
    const items = await CARD_COLLECTION_NAME.find()
    res.send(items)
  } catch (err) {
    res.status(500).send(err.message)
  }
}
const removeItemCart = async (req, res) => {
  try {
    const item = await CARD_COLLECTION_NAME.findOneAndDelete({ slug: req.params.slug })
    if (!item) return res.status(404).send('Item not found')
    res.send(item)
  } catch (err) {
    res.status(500).send(err.message)
  }
}
export const cardModel = {
  CARD_COLLECTION_NAME,
  CARD_COLLECTION_SCHEMA,
  addItemToCart,
  getAllCart,
  removeItemCart
}
