import mongoose from 'mongoose';
const Settings = mongoose.model('Settings');

export class SettingsService {

    constructor () {}

    static save(settings) {
        if (settings._id) {
            return settings.save();
        }

        return Settings.create(settings);
    }
    
    static async getAll(userId) {
        if (params) {
            return await Settings.find({ userId });
        }

        return await Settings.find();
    }

}
