import {GOOGLE_PLACES_API_KEY, GOOGLE_PLACES_OUTPUT_FORMAT} from "../configs/constants";

const NearBySearch = require('googleplaces/lib/NearBySearch');
const nearBySearch = new NearBySearch(GOOGLE_PLACES_API_KEY, GOOGLE_PLACES_OUTPUT_FORMAT);

export class GooglePlacesService {

    constructor () {}

    static fetchPlaces() {
        let parameters = {
            location: ['59.334591', '18.063240'],
            keyword: 'restaurant'
        };

        return new Promise((resolve, reject) => {
            nearBySearch(parameters, function (error, response) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log(response);
                    resolve(response);
                }
            });
        });

    }
   
}
