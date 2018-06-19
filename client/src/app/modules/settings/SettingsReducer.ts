import {ISettingsActions} from "./SettingsActions";
import {fromJS, List, Map} from "immutable";

interface ISettingsActionsTypes {

    ATTEMPT_GET_SETTINGS: string;
    GET_SETTINGS_SUCCESS: string;
    GET_SETTINGS_FAILED: string;

}

export const actions: ISettingsActionsTypes = {
    ATTEMPT_GET_SETTINGS: "ATTEMPT_GET_SETTINGS",
    GET_SETTINGS_SUCCESS: "GET_SETTINGS_SUCCESS",
    GET_SETTINGS_FAILED: "GET_SETTINGS_FAILED",
};

export interface ISettingsData extends Map<string, any> {
    settings: any;
    message: any;
}

const defaultState: ISettingsData = fromJS({
    settings: List(),
    message: "",
});

export default (state: ISettingsData = defaultState, {type, payload}: ISettingsActions): ISettingsData => {
    switch (type) {
        case actions.GET_SETTINGS_SUCCESS:
            return <ISettingsData>state
                .set("settings", fromJS(payload.data));

        case actions.GET_SETTINGS_FAILED:
            return <ISettingsData>state
                .set("message", fromJS(payload.message));

        default:
            return state;
    }
};
