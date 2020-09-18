const bcrypt = require('bcrypt');
const {addUser} = require('./auth-model.js')

const router = require('express').Router()

router.post('/register', (req, res) => {
  const creds = req.body
  if (creds.email && creds.password) {
    const hash = bcrypt.hashSync(creds.password, 14)
    creds.password = hash

    addUser(creds)
      .then(resp => res.status(200).send('user created'))
      .catch(err => res.status(500).send('something went wrong while adding user to database'))
  } else {
    res.status(200).send('email and password are required')
  }
})

module.exports = router