const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Gianz98:<teamofer98>@cluster0-msmrb.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("Prueba").collection("User");
    // perform actions on the collection object
    client.close();
});

module.exports = {
    User: require('../users/user.model')
};