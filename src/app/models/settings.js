export default (mongoose) => {
    let SettingsSchema = mongoose.Schema({
        userId: { type: String, ref: 'User', required: true, index: true },
        title: { type: String, required: true, index: true },
        position: { type: Number, required: true, index: true },
        backgroundColor: { type:String, enum: ['green', 'red'], default: 'green' },
    });

    return mongoose.model('Settings', SettingsSchema);
}

