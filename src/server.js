import loader from './loaders';
import express from 'express';

const server = async app => {
  await loader({ app });

  app.listen(app.get('PORT'), err => {
    if (err) {
      console.error(err.message);
      process.exit();
    } else console.log('server start');
  });
};

(async () => {
  await server(express());
})();
