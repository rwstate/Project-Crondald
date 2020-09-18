const db = require('../database/dbConfig.js')

function addUser(creds) {
  return db('users')
    .insert(creds)
}

module.exports = {
  addUser
}