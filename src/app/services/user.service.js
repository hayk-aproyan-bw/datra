import mongoose from 'mongoose';
const User = mongoose.model('User');

export class UserService {

    constructor () {}

    static async save(user) {
        if (user._id) {
            return user.save();
        }

        return User.create(user);
    }

    static async getByEmail(email) {
        return User.findOne({ email });
    }

}
