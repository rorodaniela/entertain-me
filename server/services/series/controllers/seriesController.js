const Series = require('../models/series')

class SeriesController {
    static async find(req, res) {
        try {
            const series = await Series.find();
            res.json(series);
        } catch (error) {
            console.log(error);
        }
    }

    static async create(req, res) {
        try {
            const newSeries = await Series.create(req.body);
            res.json(newSeries);
        } catch (error) {
            console.log(error);
        }
    }

    static async update(req, res) {
        try {
            const updatedSeries = await Series.update(req.params.id, req.body);
            res.json(updatedSeries);
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(req, res) {
        try {
            const deleteSeries = await Series.delete(req.params.id);
            res.json(deleteSeries);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = SeriesController