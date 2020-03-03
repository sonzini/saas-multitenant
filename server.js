'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import dotenv from 'dotenv';

dotenv.config();

// Inicializar conexion con DB
import './services/db/main';
// Inicializar el Worker

import morgan from './middlewares/morgan';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3030;
const NODE_ENV = process.env.NODE_ENV;

// Read more: https://stackoverflow.com/questions/23413401/what-does-trust-proxy-actually-do-in-express-js-and-do-i-need-to-use-it
app.enable('trust proxy');

app.use(compression());

app.use(morgan);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Listening in port ${PORT}, mode ${NODE_ENV || 'develop'}.`);
});
