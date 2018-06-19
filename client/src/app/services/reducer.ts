import GetAuthReducer, {IAuthData} from "../modules/auth/AuthReducer";
import GetSettingsReducer, {ISettingsData} from "../modules/settings/SettingsReducer";
import {combineReducers} from "redux-immutable";
import {Map} from "immutable";

export interface IMainStore extends Map<string, any> {
    authData: IAuthData;
    settingsData: ISettingsData;
}

export default combineReducers({
    authData: GetAuthReducer,
    settingsData: GetSettingsReducer
});
