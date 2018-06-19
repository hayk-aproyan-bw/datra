import {createSelector} from "reselect";
import {Map} from "immutable";

const settingsDataSelector: any = (state: Map<string, any>) => state.get("settingsData");

const settingsSelector: any = createSelector(
    settingsDataSelector, (settingsData: Map<string, any>) => settingsData.get("settings")
);

const messageSelector: any = createSelector(
    settingsDataSelector, (settingsData: Map<string, any>) => settingsData.get("message")
);

export default state => {
    return {
        settings: settingsSelector(state),
        settingsMessage: messageSelector(state)
    };
};