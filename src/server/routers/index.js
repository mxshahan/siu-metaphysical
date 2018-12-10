import demoRoute from './api';

export default (app) => {
    app.use('/api/v1', demoRoute);
}
