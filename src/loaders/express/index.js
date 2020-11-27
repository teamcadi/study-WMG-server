import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import routes from '../../api';
require('dotenv').config();

const loadExpress = ({ app }) => {
  app.set('PORT', process.env.PORT);
  if (process.env.NODE_ENV === 'production') {
    // todo: options
    app.use(cors());
    app.use(helmet());
    app.use(hpp());
    app.use(morgan('combined'));
  } else app.use(morgan('dev'));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  /**
   * Routes
   */
  app.all('/', (req, res) => res.json({ success: true, message: 'root' }));
  app.use('/v1/api', routes());
  app.get('/favicon.ico', (req, res) => res.status(204));
  app.use((req, res) => res.status(404).end());
};

export default loadExpress;
