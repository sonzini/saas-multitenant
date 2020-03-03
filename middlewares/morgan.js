import morgan from 'morgan';

const isProd = process.env.NODE_ENV === 'production';

export default (...args) => {
  if (isProd) {
    return morgan('tiny')(...args);
  }

  return morgan('dev')(...args);
};
