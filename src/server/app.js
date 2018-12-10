import express from 'express';
import middleware from './middlewares';
import apiRoutes from './routers';
import dotenv from 'dotenv';
import './config/db';
import path from 'path';

dotenv.config();
const app = express();
const publicPath = path.join(__dirname, '../../public');

// Static Directory
app.use(express.static(publicPath))

// Middlewares
middleware(app);
// Api Router
apiRoutes(app);

const port = process.env.PORT || 9000;
app.listen(port, (err, next) => {
    if(err) throw err;
    console.log('Amazing Server Running on Port ' + port );
})