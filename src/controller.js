import { read, update } from './db';
import { healthCheck, getRefreshToken } from './api';

export const getToken = async () => {
  console.log('\n\n\n\n\n\n\n\n\n');
  var tokens = await read();
  if (
    tokens &&
    new Date().getTime() < tokens.expiryTime &&
    tokens.accessToken &&
    (await healthCheck(tokens.accessToken))
  ) {
    console.log(`\n   Access Token is valid\n`);
    return { accessToken: tokens.accessToken };
  } else {
    console.log(`\n   Access Token is NOT valid, getching new tokens\n`);
    const refreshToken = tokens.refreshToken;
    console.log(`\n   refreshToken = ${refreshToken}\n`);
    var tokens = await getRefreshToken(refreshToken);
    console.log(`\n   got tokens\n`);
    console.log(`\n   doing DB update\n`);
    update(tokens, refreshToken);
    return await getToken();
  }
};
