export default (mongoose) => {
    let UserSchema = mongoose.Schema({
        email: { type: String, required: true, index: true, unique: true },
        title: { type: String, required: true },
        subTitle: { type: String, required: true }
    });

    return mongoose.model('User', UserSchema);
}

