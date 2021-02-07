const { Keystone } = require('@keystonejs/keystone');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { GraphQLApp } = require('@keystonejs/app-graphql');

const TodoSchema = require('./lists/Todo.js');
const UserSchema = require('./lists/User.js');

const keystone = new Keystone({
  adapter: new MongooseAdapter({ mongoUri: 'mongodb://localhost/keystone' }),
});

keystone.createList('Todo', TodoSchema);
keystone.createList('User', UserSchema);

module.exports = {
  keystone,
  apps: [new GraphQLApp()],
};