import express from 'express';
import middleware from './middlewares';
import apiRoutes from './routers';
import './config/db';

const app = express();

// Middlewares
middleware(app);
// Api Router
apiRoutes(app);

const port = 9000;
app.listen(port, (err, next) => {
    if(err) throw err;
    console.log('Amazing Server Running on Port ' + port );
})