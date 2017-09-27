const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '59cbd67435cda10160b9265211';

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) =>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) =>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

let userID = '59cadc74fb24381bdfd11acd'
User.findById(userID).then((user)=>{
    if(!user){
        return console.log('User not found');
    }
    console.log('User by Id', user);
}).catch((e) => console.log(e));