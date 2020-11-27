import PapagoService from '../services';

export default {
  translation: async (req, res, next) => {
    const { text } = req.query;
    try {
      const result = await PapagoService.translate({ text });
      if (result.success) res.status(200).json(result);
      else res.status(result.code).json(result);
    } catch (e) {
      console.error(e);
      next(e);
    }
  },
};
