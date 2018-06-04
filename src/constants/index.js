const commands = {
	WEATHER: {
		STREET: ['погода на улице', 'погода', 'температура на улице', 'за окном', 'как там на улице'],
		HOME: ['температура в доме']
	}
};

const messages = {
	WEATHER: {
		STREET: 'Сейчас на улице'
	},
	NOT_FOUND: 'К сожалению я не знаю такой команды'
};

module.exports = {commands, messages};
