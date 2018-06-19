import {
    UserService
} from '../../services';
import { SUCCESS_CODE } from '../../configs/status-codes';
import { ALREADY_EXISTS } from "../../configs/constants";
import { BadRequest } from "../../errors";
import * as jwt from 'jsonwebtoken';
import params from '../../configs/params';
import moment from 'moment';

export class AuthController {

    static async signup(req, res, next) {
        const payload = req.body;

        try {

            let user = await UserService.getByEmail(email);

            if (user) {
                throw new BadRequest(ALREADY_EXISTS('User'));
            }

            user = await UserService.save(payload);


            // Generate new access token
            const accessToken = jwt.sign({
                id: user._id,
                created_at: moment().toString()
            }, params.tokenSecret, { expiresIn: 2 * 60 * 60 });

            return res.status(SUCCESS_CODE).json({
                access_token: accessToken,
                user: {
                    id: user.id,
                    email: user.email
                }
            });

        } catch (err) {
            next(err);
        }
    }

}
