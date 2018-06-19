import PlaceModule from './place';

export default (router) => {

    const place = new PlaceModule(router);

    const modules = [
        place
    ];

    modules.forEach((module) => module.createEndpoints());
};
