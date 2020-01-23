const { MongoClient } = require("mongodb");
const { mongodbUrl } = require("./config");

exports.connect = (cb) => {
  //Mongodb version 3

  MongoClient.connect(
    mongodbUrl,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    },
    (err, client) => {
      return cb(err, client);
    }
  );
};
