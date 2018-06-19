import {actions} from "./SettingsReducer";

export interface ISettingsActions {
    type: string;
    payload?: {
        data?: any,
        message?: string
    };
}

export function attemptGetSettings(): ISettingsActions {
    return {type: actions.ATTEMPT_GET_SETTINGS};
}

export function getSettingsSuccess(data: any): ISettingsActions {
    return {type: actions.GET_SETTINGS_SUCCESS, payload: {data}};
}

export function getSettingsFailed(message: string): ISettingsActions {
    return {type: actions.GET_SETTINGS_FAILED, payload: {message: message}};
}