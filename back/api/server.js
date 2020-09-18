const express = require('express')
const cors = require('cors')
const session = require('express-session')

const server = express()
const authRouter = require('../auth/auth-router')

const sessionConfig = {
  name: "sid",
  secret: "bugs",
  cookie: {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    secure: false
  },
  httpOnly: true,
  resave: false,
  saveUninitialized: false
};

server.use(express.json())
server.use(session(sessionConfig))
server.use(cors())

server.get('/', (req, res) => {
  res.status(200).send('workin')
})

server.use("/api/auth", authRouter);

module.exports = server;