import {actions} from "./AuthReducer";

export interface IAuthActions {
    type: string;
    payload?: {
        data?: any,
        message?: string
    };
}

export function attemptRegistration(data: any): IAuthActions {
    return {type: actions.ATTEMPT_REGISTRATION, payload: {data}};
}

export function registrationSuccess(data: any): IAuthActions {
    return {type: actions.REGISTRATION_SUCCESS, payload: {data}};
}

export function registrationFailed(message: any): IAuthActions {
    return {type: actions.REGISTRATION_FAILED, payload: {message}};
}

