let User = require('../models').User;

User.create({
  first_name: null,
  last_name: null,
  user_name: null,
  email: null,
  password: null
}).then(function(user){
  console.log(user);
});
