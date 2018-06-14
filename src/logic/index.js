const Helpers = require('../helpers');
const {messages, commands, buttons} = require('../constants');

module.exports = (params) => {
	const {version, session, request: {command}} = params;
	
	if (Helpers.checkCommand(command, 'no text')) {
		return {
			version,
			session,
			response: {
				text: '',
				end_session: false
			}
		};
	} else if (Helpers.checkCommand(command, 'no version')) {
		return {
			session,
			response: {
				text: command || 'Hello!',
				end_session: false
			}
		};
	} else if (Helpers.checkCommand(command, 'no session')) {
		return {
			version,
			response: {
				text: command || 'Hello!',
				end_session: false
			}
		};
	} else if (Helpers.checkCommand(command, 'end session')) {
		return {
			version,
			session,
			response: {
				text: command || 'Hello!',
				end_session: true
			}
		};
	} else if (Helpers.checkCommand(command, commands.WEATHER.STREET)) {
		return {
			version,
			session,
			response: {
				text: `${messages.WEATHER.STREET} ${Math.floor(Math.random() * 10) + 1} градусов`,
				end_session: false
			}
		};
	} else if (Helpers.checkCommand(command, commands.WEATHER.HOME)) {
		return {
			version,
			session,
			response: {
				text: `${messages.WEATHER.HOME} ${Math.floor(Math.random() * 10) + 1} градусов`,
				end_session: false
			}
		};
	} else if (Helpers.checkCommand(command, commands.WELCOME)) {
		return {
			version,
			session,
			response: {
				text: messages.WELCOME,
				buttons: Helpers.getButtons(buttons.GENERAL),
				end_session: false
			}
		};
	} else if (Helpers.checkCommand(command, commands.SKILL)) {
		return {
			version,
			session,
			response: {
				text: messages.SKILL,
				end_session: false
			}
		};
	} else if (Helpers.checkCommand(command, commands.ABOUT_ME)) {
		return {
			version,
			session,
			response: {
				text: messages.ABOUT_ME,
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