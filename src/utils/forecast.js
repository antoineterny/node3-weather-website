const request = require("postman-request")

const forecast = (long, lat, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=ab2f7177b17b1a8140ca9b1f1bc81c32&query=${lat},${long}`

	request({ url: url, json: true }, (error, { body }) => {
		if (error) {
			callback("Unable to connect to weather service", undefined)
		} else if (body.success === false) {
			callback(
				"Your API request failed. Please try again or contact support.",
				undefined
			)
		} else {
			callback(
				undefined,
				body.current.weather_descriptions[0] +
					`. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike}`
			)
		}
	})
}

module.exports = forecast
