import {
    INVALID,
    REQUIRED,
} from '../../configs/constants';

export default {
    signup: {
        validation: {
            'title': {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('Title')
                }
            },
            'subTitle': {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('Sub Title')
                }
            },
            'email': {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('Email')
                },
                isEmail: {
                    errorMessage: INVALID('Email')
                }
            }
        }
    }
};

