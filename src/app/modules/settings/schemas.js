import {
    REQUIRED,
    INVALID,
    SETTINGS_TITLE_MIN_LENGTH,
    SETTINGS_TITLE_MAX_LENGTH
} from '../../configs/constants';

export default {
    setting: {
        validation: {
            title: {
                in: 'query',
                notEmpty: {
                    errorMessage: REQUIRED('Longitude')
                },
                isLength: {
                    options: [{ min: SETTINGS_TITLE_MIN_LENGTH, max: SETTINGS_TITLE_MAX_LENGTH }],
                    errorMessage: LENGTH_REQUIRED('Title', { max: SETTINGS_TITLE_MAX_LENGTH })
                }
            },
            position: {
                in: 'query',
                notEmpty: {
                    errorMessage: REQUIRED('Position')
                },
                isInt: true
            },
            backgroundColor: {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('Background Color')
                },
                matches: {
                    enum: ['green', 'red'],
                    errorMessage: INVALID('Background Color')
                }
            }
        },
        authentication: true
    }
};
