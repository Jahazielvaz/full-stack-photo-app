let User = require('../models').User;

User.create({
  first_name: 'Mattywoo',
  last_name: 'spankyspank',
  user_name: 'codeslum',
  email: 'impissed300@impissed.com',
  password: 'angrypuppies'
}).then(function(user){
  console.log(user);
});
