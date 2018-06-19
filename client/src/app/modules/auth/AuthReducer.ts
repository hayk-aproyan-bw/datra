import {IAuthActions} from "./AuthActions";
import {fromJS, Map} from "immutable";

interface IAuthActionsTypes {

    ATTEMPT_REGISTRATION: string;
    REGISTRATION_SUCCESS: string;
    REGISTRATION_FAILED: string;

}

export const actions: IAuthActionsTypes = {
    ATTEMPT_REGISTRATION: "ATTEMPT_REGISTRATION",
    REGISTRATION_SUCCESS: "REGISTRATION_SUCCESS",
    REGISTRATION_FAILED: "REGISTRATION_FAILED",
};

export interface IAuthData extends Map<string, any> {
    user: any;
    message: any;
}

const defaultState: IAuthData = fromJS({
    user: Map(),
    message: "",
});

export default (state: IAuthData = defaultState, {type, payload}: IAuthActions): IAuthData => {
    switch (type) {
        case actions.REGISTRATION_SUCCESS:
            return <IAuthData>state
                .set("user", fromJS(payload.data.data));

        case actions.REGISTRATION_FAILED:
            return <IAuthData>state
                .set("message", Map(payload.message || ""));

        default:
            return state;
    }
};
