import { StatusCodes } from 'http-status-codes';
// import ApiError from '~/utils/ApiError'
import { boardService } from '~/services/boardService';

const createNew = async (req, res, next) => {
  try {
    // console.log('req.body: ', req.body)
    // console.log('req.query: ', req.query)
    // console.log('req.params: ', req.params)
    // console.log('req.files: ', req.files)
    // console.log('req.cookies: ', req.cookies)
    // console.log('req.jwtDecoded: ', req.jwtDecoded)
    const createBoard = await boardService.createNew(req.body);

    res.status(StatusCodes.CREATED).json(createBoard);
  } catch (error) {
    next(error);
  }
};
const getDetails = async (req, res, next) => {
  try {
    const boardId = req.params.id;
    const board = await boardService.getDetails(boardId);
    res.status(StatusCodes.OK).json(board);
  } catch (error) {
    next(error);
  }
};
const getProduct = async (req, res, next) => {
  try {
    const boards = await boardService.getProduct();
    res.status(StatusCodes.OK).json(boards);
  } catch (error) {
    next(error);
  }
};
export const boardController = {
  createNew,
  getDetails,
  getProduct,
};
