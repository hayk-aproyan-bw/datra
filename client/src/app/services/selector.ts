import GetAuthSelector from "../modules/auth/AuthSelector";
import GetSettingsSelector from "../modules/settings/SettingsSelector";

export default (state, all = true, modules = []) => {
    if (all) {
        return {
            ...GetAuthSelector(state),
            ...GetSettingsSelector(state),
        };
    }

    let stateInProps: any = {};

    if (modules.includes("auth")) {
        stateInProps = Object.assign({}, stateInProps, {...GetAuthSelector(state)});
    }

    return stateInProps;
};
