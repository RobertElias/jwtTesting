const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

//middleware
server.unsubscribe(express.json())

//routes

module.exports = server;