const express = require('express');

const projectRouter = require('../model_routers/project-router.js');

const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;
