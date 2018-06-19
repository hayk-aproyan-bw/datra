import {
    UserService,
    SettingsService
} from '../../services';
import { SUCCESS_CODE } from '../../configs/status-codes';
import { ALREADY_EXISTS } from "../../configs/constants";
import { BadRequest } from "../../errors";
import * as jwt from 'jsonwebtoken';
import params from '../../configs/params';
import moment from 'moment';

export class AuthController {

    static async signup(req, res, next) {
        const { title, subTitle, email } = req.body;

        try {

            let user = await UserService.getByEmail(email);

            if (user) {
                throw new BadRequest(ALREADY_EXISTS('Email'));
            }

            user = await UserService.save({ title, subTitle, email });

            let promises = [];
            for (let i = 0; i < email.length; i++) {
                promises.push(SettingsService.save({
                    userId: user._id,
                    position: i,
                    title: email.charAt(i)
                }));
            }

            // Save all settings for each character in email
            await Promise.all(promises);

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
