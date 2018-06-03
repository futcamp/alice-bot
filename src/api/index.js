const axios = require('axios');
const {api: {host}} = require('../config/options.json');

const methods = {
	async GET_WEATHER(act, sensor) {
		return await axios.get(`${host}/meteo`, {
			params: {
				act,
				sensor
			}
		});
	}
};

module.exports = methods;