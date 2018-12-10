const NODE_ENV = process.env.NODE_ENV;
const config = {
    MONGO_URL: NODE_ENV==='production' ? 'mongodb://root:a123456@ds227674.mlab.com:27674/siu-metaphysical': 'mongodb://127.0.0.1:27017/siu-metaphysical',
    secret: 'helloWorld'
}

export default config;
