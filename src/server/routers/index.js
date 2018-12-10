import demoRoute from './demo';

export default (app) => {
    app.use('/api/demo', demoRoute);
}
