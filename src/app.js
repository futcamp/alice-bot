const {commands, messages} = require('./constants');
const {port} = require('./config/options.json');

const express = require('express');
const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
	const {version, session, request: {command}} = req.body;

	if (command === 'no text') {
		res.json({
			version,
			session,
			response: {
				text: "",
				end_session: false
			}
		});
	}

	else if (command === 'no version') {
		res.json({
			session,
			response: {
				text: command || 'Hello!',
				end_session: false
			}
		});
	}

	else if (command === 'no session') {
		res.json({
			version,
			response: {
				text: command || 'Hello!',
				end_session: false
			}
		});
	}

	else if (command === 'end session') {
		res.json({
			version,
			session,
			response: {
				text: command || 'Hello!',
				end_session: true
			}
		});
	}

	else if (commands.WEATHER.STREET.some(item => item === command.toLowerCase())) {
		res.json({
			version,
			session,
			response: {
				text: `${messages.WEATHER.STREET} ${Math.floor(Math.random() * 10) + 1} градусов`,
				end_session: false
			}
		});
	}

	else {
		res.json({
			version,
			session,
			response: {
				text: command || 'Hello!',
				end_session: false
			}
		});
	}
});

app.use('*', (req, res) => {
	res.sendStatus(404);
});

app.listen(port, () => {
	console.log(`Express server is listening on ${port}`);
});