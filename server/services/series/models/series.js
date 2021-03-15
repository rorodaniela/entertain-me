const {getDatabase} = require('../config/mongodb')
const {ObjectId} = require('mongodb')

class Series {
    static find() {
        return getDatabase().collection("TVSeries").find().toArray();
    }

    static findById(id) {
        return getDatabase().collection("TVSeries").findOne({_id: ObjectId(id)})
    }

    static create(newSeries) {
        return getDatabase().collection("TVSeries").insertOne(newSeries);
    }

    static update(id, updatedSeries) {
        return getDatabase().collection("TVSeries").replaceOne({ _id: ObjectId(id) }, updatedSeries, { upsert: true });
    }

    static delete(id) {
        return getDatabase().collection("TVSeries").deleteOne({ _id: ObjectId(id) });
    }
}

module.exports = Series;
