// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59ca9000c0cfad1c3f02c99d')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal:false
    // }).then((result) =>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59ca8364815ee178ead6fd63')
    },{
        $set:{
            name:'Philip'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});