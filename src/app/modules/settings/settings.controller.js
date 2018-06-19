import { CREATED_CODE, SUCCESS_CODE } from '../../configs/status-codes';
import {
    SettingsService
} from '../../services';

export class SettingsController {
    /**
     * This function is used to get all current user's settings
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise.<*>}
     */
    static async getAll(req, res, next) {
        try{
            let settings = await SettingsService.getAll({
                userId: req.user._id
            });

            return res.status(SUCCESS_CODE).json(settings);
        }
        catch(err) {
            next(err);
        }
    }

    /**
     * This function is used to create setting for current user
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise.<*>}
     */
    static async create(req, res, next) {
        try {
            const payload = req.body;
            payload.userId = req.user._id;

            let setting = await SettingsService.save(payload);

            return res.status(CREATED_CODE).json(setting);
        }
        catch (err) {
            next(err);
        }
    }

    /**
     * This function is used to update existing setting for current user
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise<*>}
     */
    static async update(req, res, next) {
        // @Todo
    }

}
