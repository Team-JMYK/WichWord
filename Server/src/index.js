const {setupServer} = require("./server.js");
require('dotenv').config({path: '../.env'});

const server = setupServer();
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log("Server listening on Port: ", PORT);
});