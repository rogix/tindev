const express = require('express');
const mongoose = require('mongoose');
import cors from 'cors';

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://tindev:tindev@tindev-cranj.mongodb.net/tindev?retryWrites=true&w=majority', {
	useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
