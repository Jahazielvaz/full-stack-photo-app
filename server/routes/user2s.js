'use strict';
const sequelize = require('sequelize');

let user = require('../models').User2;

user.create({
  first_name: 'Mattywoo',
  last_name: 'Killa',
  user_name: 'KillaKoala',
  email:'Therealdeadshot300@deadshot.com',
  password: 'pinkBunnies'
}).then(function(user){
  console.log(user);
});
