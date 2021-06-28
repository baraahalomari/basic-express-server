'use strict';
require('dotenv').config();
const server = require('./src/server');
server.zeft(process.env.PORT || 3000)