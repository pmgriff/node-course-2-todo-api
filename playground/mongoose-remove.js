const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) =>{
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({ _id: '59cd318c174affe1962a83f8'}).then((todo) => {
//     console.log(todo);
// })


Todo.findByIdAndRemove('59cd318c174affe1962a83f8').then((todo) => {
    console.log(todo);
})