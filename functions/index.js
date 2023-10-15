import { onRequest } from 'firebase-functions/v2/https';
import qwikApp from './server/entry-firebase.js';

export const ssr = onRequest(
  {
    memory: '1GiB',
  },
  qwikApp,
);
export const ssrDev = ssr;
