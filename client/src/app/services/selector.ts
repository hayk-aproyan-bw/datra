import GetAuthSelector from "../modules/auth/AuthSelector";

export default (state, all = true, modules = []) => {
    if (all) {
        return {
            ...GetAuthSelector(state),
        };
    }

    let stateInProps: any = {};

    if (modules.includes("auth")) {
        stateInProps = Object.assign({}, stateInProps, {...GetAuthSelector(state)});
    }

    return stateInProps;
};
