import { Router } from 'express';
import PapagoController from '../controllers';
const papagoRouter = Router();

export default ({ router }) => {
  router.use('/papago', papagoRouter);

  papagoRouter.get('/', (req, res) => res.send('hi'));
  /**
   * @description 파파고 번역
   * @routes GET /v1/api/papago/translation
   * @request @query { text: string }
   */
  papagoRouter.get('/translation', PapagoController.translation);
};
