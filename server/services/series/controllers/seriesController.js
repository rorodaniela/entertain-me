const Series = require('../models/series')

class SeriesController {
    static async find(req, res) {
        try {
            const series = await Series.find();
            res.status(200).json(series);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async create(req, res) {
        try {
            const newSeries = await Series.create(req.body);
            res.status(201).json(newSeries);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async update(req, res) {
        try {
            const updatedSeries = await Series.update(req.params.id, req.body);
            res.status(200).json(updatedSeries);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async delete(req, res) {
        try {
            const deleteSeries = await Series.delete(req.params.id);
            res.status(200).json({ message: "Data deleted" });
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = SeriesController