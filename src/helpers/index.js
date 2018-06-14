const methods = {
	checkCommand(command, listCommands) {
		const phrase = command.trim().toLowerCase();

		if (typeof listCommands === 'string') {
			return phrase === listCommands;
		} else {
			return listCommands.some(item => item === phrase);
		}
	},
	getButtons(list) {
		return list.map((title) => ({title}));
	}
};

module.exports = methods;