import {
    apiURL,
    appURL,
    port
} from '../helpers/config';

const params = {
    development: {
        apiUrl: apiURL,
        appUrl: appURL,
        apiPort: port
    },
    production: {
        apiUrl: apiURL,
        appUrl: appURL,
        apiPort: port
    }
};

export default params[process.env.NODE_ENV || 'development'];
