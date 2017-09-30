const {SHA256} =  require('crypto-js');
const jwt =  require('jsonwebtoken');
const bcrypt =  require('bcryptjs');

let password = 'abc123!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) =>{
//         console.log(hash);
//     });
// });

let hashedPassword = '$2a$10$10XHQYvqjf.8WpUP5i5PX.ThKTcG5oPPk8lFZPdYjPP7zmRd3j6sO';

bcrypt.compare(password, hashedPassword, (err, res)=>{
    console.log(res);
});

// let data = {
//     id: 10
// };

// let token = jwt.sign(data, 'abc123');
// console.log(token);
// let decoded = jwt.verify(token , 'abc123');
// console.log('decoded',decoded);

// let message =  'I am user number 3';
// let hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// let data = {
//     id: 4
// };

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('Data was not changed');
// } else{
//     console.log('Data was changed Don\'t trust!');
// }