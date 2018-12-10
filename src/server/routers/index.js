import demoRoute from './sms';

export default (app) => {
    app.use('/api/v1/sms', demoRoute);
}
