import CustomError from '../services/errors';

export default (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.code).json(err);
  }

  console.log('--------------------------------');
  console.log('This error is unhandled');
  console.log('--------------------------------');

  next(err);
};
