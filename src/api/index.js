import { Router } from 'express';
import papagoRouter from './papago/routes';

export default () => {
  const router = Router();
  papagoRouter({ router });
  return router;
};
