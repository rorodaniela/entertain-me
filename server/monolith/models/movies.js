const {getDatabase} = require('../config/mongodb')
const {ObjectId} = require('mongodb')

class Movies {
    static find() {
        return getDatabase().collection("Movies").find().toArray();
    }

    static create(newMovie) {
        return getDatabase().collection("Movies").insertOne(newMovie);
    }

    static update(id, updatedMovie) {
        console.log(id, updatedMovie);
        return getDatabase().collection("Movies").replaceOne({ _id: ObjectId(id) }, updatedMovie, { upsert: true });
    }

    static delete(id) {
        return getDatabase().collection("Movies").deleteOne({ _id: ObjectId(id) });
    }
}

module.exports = Movies
