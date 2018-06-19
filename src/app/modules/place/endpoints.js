import { PlaceController } from './place.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';

export default (router) => {

    router.get('/', ...middlewares(schemas, 'getAll'), PlaceController.getAll);

    router.delete('/:id', PlaceController.delete);

    router.post('/fetch', PlaceController.fetchFromAPI);

};
