import SettingsModule from './settings';
import AuthModule from './auth';

export default (router) => {

    const auth = new AuthModule(router);
    const settings = new SettingsModule(router);

    const modules = [
        auth,
        settings
    ];

    modules.forEach((module) => module.createEndpoints());
};
