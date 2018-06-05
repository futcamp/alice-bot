const methods = {
	checkCommand(command, listCommands) {
		const phrase = command.toLowerCase();

		if (typeof listCommands === 'string') {
			return phrase === listCommands;
		} else {
			return listCommands.some(item => item === phrase);
		}
	},
};

module.exports = methods;