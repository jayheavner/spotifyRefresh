// External Dependancies
import { Schema, model } from 'mongoose';

const tokenSchema = new Schema({
  accessToken: String,
  refreshToken: String,
  expiryTime: Number
});

export default model('Token', tokenSchema);
