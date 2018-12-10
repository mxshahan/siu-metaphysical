import mongoose from 'mongoose';
import config from './config';

mongoose.Promise = global.Promise;

try {
  mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true
  });
} catch (err) {
  mongoose.createConnection(config.MONGO_URL)
}

mongoose.connection
  .once('open', () => console.log("MongoDB is Running.."))
  .on('error', e => { throw e })
