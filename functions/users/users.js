const {BFast} = require('bfastnode');
const loginUi = require('./ui/login').loginUi;
const headerUi = require('../common-ui/header').headerUi;
const appUi = require('../common-ui/appUI').appUi;

exports.usersLogin = BFast.functions.onHttpRequest('/users/login', (request, response) => {
    const method = request.method;
    // method can be: GET | POST | DELETE | OPTIONS | PUT | UPDATE
    if (method === 'GET') {
        response.send(`
        ${appUi(`
           ${headerUi()}
            ${loginUi('username')}
        `)}
        `);
    } else if (method === 'POST') {
        console.log(request.body);
        response.status(200).send(request.body);
    } else {
        response.status(400).send('can not serve that method')
    }

});

exports.usersRegister = BFast.functions.onHttpRequest('/users/register', (request, response) => {
    response.status(200).json({
        username: 'joshua',
        token: '87y87tggkjret',
        id: '234'
    });
});
