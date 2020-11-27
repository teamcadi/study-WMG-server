import loadExpress from './express';

const loader = async ({ app }) => {
  try {
    loadExpress({ app });
  } catch (loaderError) {
    console.error(loaderError);
    throw loaderError;
  }
};

export default loader;
