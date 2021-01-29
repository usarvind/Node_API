
const env = process.env.NODE_ENV || "localhost"
var config = {
	development: {
		//++++++++++++++++++++++++++++++++++++++++++++
		"port": 681,
		"baseUrl": "https://",
		"secret": "gammingapis1wdfr5tgh7yu3jkm67uyhj",
	},
	production: {
		"port": 450,
		"baseUrl": "https://",
		"secret": "gammingapis1wdfr5tgh7yu3jkm67uyhj",
	},
	localhost: {
		"port": 3005,
		"baseUrl": "http://localhost:3005/",
		"secret": "gammingapis1wdfr5tgh7yu3jkm67uyhj",
	}
}
module.exports = config[env]