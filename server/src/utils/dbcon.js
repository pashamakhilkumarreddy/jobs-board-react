const mongoose = require('mongoose');
const {
  db: {
    mongo: {
      DB_HOST,
      DB_PORT,
      DB_NAME,
      // DB_USER,
      // DB_PASSWORD,
    },
  },
} = require('../config');

const getDBURI = ({
  dbHost = DB_HOST,
  dbPort = DB_PORT,
  dbName = DB_NAME,
} = {}) => Promise.resolve(`mongodb://${dbHost}:${dbPort}/${dbName}`);

const connectToDB = (dbURI) => {
  try {
    const mongoOptions = {
      // user: process.env.DB_USER,
      // pass: process.env.DB_PASS,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    return Promise.resolve(mongoose.connect(dbURI, mongoOptions));
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = {
  getDBURI,
  connectToDB,
};
