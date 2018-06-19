import {NO_CONTENT_CODE, SUCCESS_CODE} from '../../configs/status-codes';
import {
    PlaceService,
    GooglePlacesService
} from '../../services';

export class PlaceController {
    /**
     * This function is used to get all places by given coordinates
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise.<*>}
     */
    static async getAll(req, res, next) {
        let places = [];
        let {lat, lng} = req.query;

        try{
            places = await PlaceService.getAll([lng, lat]);

            return res.status(SUCCESS_CODE).json(places);
        }
        catch(err) {
            next(err);
        }
    }

    /**
     * This function is used to fetch place from Google place API
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise.<*>}
     */
    static async fetchFromAPI(req, res, next) {
        try {
            let response = await GooglePlacesService.fetchPlaces();

            if (response.results.length) {
                await PlaceService.insertMultiple(response.results);
            }

            return res.status(NO_CONTENT_CODE).json();
        }
        catch (err) {
            next(err);
        }
    }

    /**
     * This function is used to delete the place by given id
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise.<*>}
     */
    static async delete(req, res, next) {
        try {
            await PlaceService.delete(req.params.id);

            return res.status(NO_CONTENT_CODE).json();
        }
        catch (err) {
            next(err);
        }
    }


}
