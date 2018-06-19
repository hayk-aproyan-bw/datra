import {mainReducer, mainRouter, mainSaga} from "../../app/services";
import {RouteConfig} from "react-router";
import configureStore from "../store/configureStore";
import {Store} from "react-redux";
import LanguageUtil from "helpers/utils/LanguageUtil";

export interface IAppConfigurations {
    store: Store<any>;
    routes: RouteConfig;
}

export default (): IAppConfigurations => {
    let configs: any = {
        store: {},
        routes: {}
    };

    configs.store = configureStore(mainReducer, mainSaga);
    configs.routes = mainRouter();

    // Configure language localization
    LanguageUtil.configure();

    return configs;
};
