import Token from './models/token';

export const read = async () => {
  return await Token.findOne();
};

export const update = async (tokens, refreshToken) => {
  console.log('\n   updating db\n');

  const expiryTime = tokens.expires_in * 1000 + new Date().getTime();

  Token.findOneAndUpdate(
    { refreshToken: refreshToken },
    { $set: { accessToken: tokens.access_token, expiryTime: expiryTime } },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log('Something wrong when updating data!');
      }
    }
  );
};
