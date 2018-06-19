import { SettingsController } from './settings.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';

export default (router) => {

    router.get('/', SettingsController.getAll);

    router.post('/', ...middlewares(schemas, 'setting'), SettingsController.create);

    router.put('/:id', ...middlewares(schemas, 'setting'), SettingsController.update);

};
