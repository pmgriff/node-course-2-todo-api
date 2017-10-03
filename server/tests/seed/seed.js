const {ObjectID} = require('mongodb');
const jwt =  require('jsonwebtoken');

let {Todo} = require('./../../models/todo');
let {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
    _id: userOneId,
    email: 'user1@website.com',
    password: 'UserOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()

    }]
},{
    _id: userTwoId,
    email: 'user2@website.com',
    password: 'UserTwoPass'
}];


const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
},{
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 333
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        let userOne = new User(users[0]).save();
        let userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
        return User.insertMany(users);
    }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};