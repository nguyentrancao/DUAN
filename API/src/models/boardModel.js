
import Joi, { number } from 'joi'
import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

// Define Collection (name & schema)
const BOARD_COLLECTION_NAME = 'Products'
const BOARD_COLLECTION_SCHEMA = Joi.object({
  name: Joi.string().required().min(3).max(50).trim().strict(),
  slug: Joi.string().required().min(3).trim().strict(),
  description: Joi.string().required().min(3).max(256).trim().strict(),
  price: Joi.number().required(),
  stock: Joi.string().default(null),
  color: Joi.array().items(
    Joi.string()
  ).required(),
  // Lưu ý các item trong mảng columnOrderIds là ObjectId nên cần thêm pattern cho chuẩn nhé, (lúc quay video số 57 mình quên nhưng sang đầu video số 58 sẽ có nhắc lại về cái này.)
  columnOrderIds: Joi.array().items(
    Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE)
  ).default([]),
  image: Joi.string().uri().required(),
  storageCapacity: Joi.string().max(200).trim().strict().default(null),
  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _destroy: Joi.boolean().default(false)
})

const validataBeforeCreate = async (data) => {
  return await BOARD_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false })
}

const createNew = async (data) => {
  try {
    const validData = await validataBeforeCreate(data)
    const createdBoard = await GET_DB().collection(BOARD_COLLECTION_NAME).insertOne(validData)
    return createdBoard
    // return await GET_DB().collection(BOARD_COLLECTION_NAME).insertOne(data)
  } catch (error) { throw new Error(error) }
}

const findOneById = async (id = number) => {
  try {
    const result = await GET_DB().collection(BOARD_COLLECTION_NAME).findOne({ _id: new ObjectId(id) })
    return result
  } catch (error) {
    throw new Error(error)
  }
}
const getDetails = async (id = number) => {
  try {
    const result = await GET_DB().collection(BOARD_COLLECTION_NAME).findOne({ _id: new ObjectId(id) })
    return result
  } catch (error) {
    throw new Error(error)
  }
}
const getProduct = async () => {
  try {
    const result = await GET_DB().collection(BOARD_COLLECTION_NAME).find().toArray()
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const boardModel = {
  BOARD_COLLECTION_NAME,
  BOARD_COLLECTION_SCHEMA,
  createNew,
  findOneById,
  getDetails,
  getProduct
}