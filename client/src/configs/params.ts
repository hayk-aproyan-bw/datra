import {
    host,
    apiUrl,
    googleMapUrl
} from "helpers/config";

const urls: any = {
    development: {
        hostname: host,
        httpsEnabled: false,
        apiUrl: apiUrl,

    },
    production: {
        hostname: host,
        httpsEnabled: true,
        env: "production",
        apiUrl: apiUrl,
    }
};

export default urls[process.env.NODE_ENV || "development"];
