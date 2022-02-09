const {User} = require('../src/app/models');
const {factory } = require('factory-girl');
factory.define('User', User, {
    name: 'Israel', 
    email: 'israel@gmail.com',
    password: '123456'
});

module.exports = factory;