const helpers = require('../helpers');
const {messages, commands} = require('../constants');

module.exports = (params) => {
	const {version, session, request: {command}} = params;
	const phrase = command.toLowerCase();

	if (phrase === 'no text') {
		return {
			version,
			session,
			response: {
				text: '',
				end_session: false
			}
		};
	} else if (phrase === 'no version') {
		return {
			session,
			response: {
				text: phrase || 'Hello!',
				end_session: false
			}
		};
	} else if (phrase === 'no session') {
		return {
			version,
			response: {
				text: phrase || 'Hello!',
				end_session: false
			}
		};
	} else if (phrase === 'end session') {
		return {
			version,
			session,
			response: {
				text: phrase || 'Hello!',
				end_session: true
			}
		};
	} else if (commands.WEATHER.STREET.some(item => item === phrase)) {
		return {
			version,
			session,
			response: {
				text: `${messages.WEATHER.STREET} ${Math.floor(Math.random() * 10) + 1} градусов`,
				end_session: false
			}
		};
	} else if (commands.WELCOME.some(item => item === phrase)) {
		return {
			version,
			session,
			response: {
				text: messages.WELCOME,
				end_session: false
			}
		};
	} else {
		return {
			version,
			session,
			response: {
				text: messages.NOT_FOUND || 'Hello!',
				end_session: false
			}
		};
	}
};