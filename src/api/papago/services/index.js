import request from 'request';
require('dotenv').config();

const pRequest = option =>
  new Promise(resolve => {
    request.post(option, (err, response, body) => {
      if (!err && response.statusCode == 200) {
        console.log(body);
        resolve({ success: true, body });
      } else {
        resolve({ success: false, code: response.statusCode });
      }
    });
  });

export default {
  translate: async ({ text }) => {
    const clientId = process.env.PAPAGO_CLIENT_ID;
    const clientSecret = process.env.PAPAGO_CLIENT_SECRET;
    const apiUrl = 'https://openapi.naver.com/v1/papago/n2mt';

    const op = {
      url: apiUrl,
      form: { source: 'en', target: 'en', text },
      headers: {
        'X-Naver-Client-Id': clientId,
        'X-Naver-Client-Secret': clientSecret,
      },
    };
    return await pRequest(op);
  },
};
