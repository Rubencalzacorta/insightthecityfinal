require('dotenv').config();

//mongoose connection
require("./configs/mongoose.configs")

//Debugger
require("./configs/debugger.configs")

//App
const express = require('express');
const app = express();

// Configs
require("./configs/middleware.configs")(app)
require("./configs/views.configs")(app)
require("./configs/handlebars.configs")
app.locals.title = 'Express - Generated with IronGenerator';
require("./configs/passport.configs")(app)
require("./configs/cors.configs")(app)


//routes
app.use('/api/profile', require('./routes/profile.routes.js'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/files', require('./routes/files.routes.js'))
app.use('/api/maps', require('./routes/maps.routes.js'))
app.use('/api/notes', require('./routes/notes.routes.js'))
app.use('/api/projects', require('./routes/projects.routes.js'))



app.use((req, res) => { res.sendFile(__dirname + "/public/index.html"); })


module.exports = app;
