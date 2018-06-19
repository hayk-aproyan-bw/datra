import mongoose from 'mongoose';
const Place = mongoose.model('Place');

export class PlaceService {

    constructor () {}

    static insertMultiple(data) {

        let promises = data.map((item) => {
            let newPlace = new Place({
                loc: [item.geometry.location.lng, item.geometry.location.lat],
                icon: item.icon,
                name: item.name,
                id: item.id,
                vicinity: item.vicinity
            });

            return newPlace.save();
        });

        return Promise.all(promises);
    }
    
    static async getAll(coords) {
        return await Place.find({
            loc: {
                $near: coords
            }
        });
    }

    static async delete(id) {
        return Place.findByIdAndRemove(id);
    }

}
