const express = require('express');
const server = express();
const recipeRouter = require('./recipe-router/router.js');

server.use(express.json())
server.use('/api/recipes', recipeRouter)

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})