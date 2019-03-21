import { getToken } from './controller';

const routes = [
  {
    method: 'GET',
    url: '/api./accessToken',
    handler: getToken
  }
];

export default routes;
