import {
    REQUIRED,
    INVALID
} from '../../configs/constants';

export default {
    getAll: {
        validation: {
            lng: {
                in: 'query',
                notEmpty: {
                    errorMessage: REQUIRED('Longitude')
                },
                matches: {
                    options: [/^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/],
                    errorMessage: INVALID('Longitude')
                }
            },
            lat: {
                in: 'query',
                notEmpty: {
                    errorMessage: REQUIRED('Latitude')
                },
                matches: {
                    options: [/^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/],
                    errorMessage: INVALID('Latitude')
                }
            }
        }
    }
};
