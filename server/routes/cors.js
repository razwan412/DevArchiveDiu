import cors from 'cors';
const whitelist = ['http://localhost:3000', 'http://localhost:5000', 'https://devarchivediu.netlify.app',  'https://devarchivediu.vercel.app/',
'https://devarchivediu-i9bz8j499-razwan412.vercel.app/',];

const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

export const corsWithOptions = cors(corsOptionsDelegate);
