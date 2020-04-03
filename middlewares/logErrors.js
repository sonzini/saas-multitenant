export default logErrors = (err, req, res, next) => {
  console.error(err.stack);
  next(err);
};
