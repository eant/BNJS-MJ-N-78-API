const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

const {
  MONGO_CONNECTION_STRING: uri,
  MONGO_DATABASE_NAME: dbName
} = process.env;

const config = { useUnifiedTopology: true };

const client = MongoClient(uri, config);

let _connection;

const connect = async () =>
  await new Promise((resolve, reject) => {
    try {
      client.connect((err, client) => {
        if (err) throw err;
        resolve(client);
      });
    } catch (e) {
      reject(e);
    }
  });

const connection = () => {
  if (!_connection) {
    _connection = connect();
  }
  return _connection;
};

const getCollection = async collectionName => {
  const client = await connection();

  const db = client.db(dbName);
  return db.collection(collectionName);
};

module.exports = {
  ObjectId,
  connection,
  getCollection
};
