import axios from 'axios';
import 'dotenv/config';

export const getRefreshToken = async refreshToken => {
  console.log(`\n   api.getRefreshToken()\n`);
  console.log(`n ${process.env.clientId}:${process.env.clientSecret}`);
  const r = await axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(
          process.env.clientId + ':' + process.env.clientSecret
        ).toString('base64')
    }
  });
  console.log(`\n   AFTER CALL\n`);
  console.dir(r.data);
  console.log(`\n\n`);
  return r.data;
};

// uses the current access token to get info about current user as a health check
export const healthCheck = async accessToken => {
  const me = await axios.get('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  return me.statusText === 'OK' ? true : false;
};
