const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'dashboardDB';
const jsonData = require('./jsondata.json'); // Adjust the path to your JSON file

MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  const db = client.db(dbName);
  const collection = db.collection('data');

  collection.insertMany(jsonData, (err, result) => {
      if (err) throw err;
      console.log('Data inserted');
      client.close();
  });
});
