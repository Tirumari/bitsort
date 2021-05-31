const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await MongoClient.connect(db, { useNewUrlParser: true, useUnifiedTopology: true } )
    console.log('MongoDB connected')
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = connectDB;