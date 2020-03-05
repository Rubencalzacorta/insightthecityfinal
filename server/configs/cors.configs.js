const cors = require('cors')

module.exports = app => {

    const whitelist = ['http://localhost:3000']
    const corsOptions = {
        origin: (origin, cb) => {
            const originWhitelisted = whitelist.includes(origin)
            cb(null, originWhitelisted)
        },
        credentials: true        // RUTAS PERSISTENTES
    }
    app.use(cors(corsOptions))

}