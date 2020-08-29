const cors = require('cors');

const user = require('../routes/userRoutes'); 

const { versionInfo } = require('../configurations');

module.exports = (app) => { 
	//to enable cross-origin policy
	app.use(cors());	

	//user routes
	app.use(`/api/${versionInfo}/user`, user);
}; 
