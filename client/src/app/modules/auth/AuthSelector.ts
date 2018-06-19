import {createSelector} from "reselect";
import {Map} from "immutable";

const authDataSelector: any = (state: Map<string, any>) => state.get("authData");

const userSelector: any = createSelector(
    authDataSelector, (authData: Map<string, any>) => authData.get("user")
);

const messageSelector: any = createSelector(
    authDataSelector, (authData: Map<string, any>) => authData.get("message")
);

export default state => {
    return {
        user: userSelector(state),
        message: messageSelector(state)
    };
};