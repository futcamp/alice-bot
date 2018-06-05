const getResponse = require('./logic');
const {port} = require('./config/options.json');

const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
	res.json(getResponse(req.body));
});

app.use('*', (req, res) => {
	res.sendStatus(404);
});

app.listen(port, () => {
	console.log(`Express server is listening on ${port}`);
});