export default (mongoose) => {
    let PlaceSchema = mongoose.Schema({
        loc: {
            type: [Number],
            index: '2d'
        },
        icon: String,
        name: String,
        id: { type:String, unique: true },
        vicinity: String
    });

    return mongoose.model('Place', PlaceSchema);
}

