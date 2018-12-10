const NODE_ENV = process.env.NODE_ENV;
const mlab_dev = 'mongodb://127.0.0.1:27017/siu-metaphysical'
const mlab_prod = 'mongodb://root:a123456@ds227674.mlab.com:27674/siu-metaphysical';

const config = {
    MONGO_URL: NODE_ENV==='production' ? mlab_prod: mlab_dev,
    secret: 'helloWorld'
}

export default config;
