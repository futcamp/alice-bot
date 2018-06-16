const getResponse = require('./logic');
const {port} = require('./config/options.json');

const express = require('express');
const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
	res.json(await getResponse(req.body));
});

app.use('*', (req, res) => {
	res.sendStatus(404);
});

app.listen(port, () => {
	console.log(`Express server is listening on ${port}`);
});