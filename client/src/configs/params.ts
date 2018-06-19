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
        googleMapUrl: googleMapUrl

    },
    production: {
        hostname: host,
        httpsEnabled: true,
        env: "production",
        apiUrl: apiUrl,
        googleMapUrl: googleMapUrl
    }
};

export default urls[process.env.NODE_ENV || "development"];
