const Movies = require('../models/movies')

class MoviesController {
    static async find(req, res) {
        try {
            const movies = await Movies.find();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async findById(req, res) {
        try {
            const movie = await Movies.findById(req.params.id);
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async create(req, res) {
        try {
            const newMovie = await Movies.create(req.body);
            res.status(201).json(newMovie);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async update(req, res) {
        try {
            const updatedMovie = await Movies.update(req.params.id, req.body);
            res.status(200).json(updatedMovie);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async delete(req, res) {
        try {
            const deleteMovie = await Movies.delete(req.params.id);
            res.status(200).json({ message: "Data deleted" });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = MoviesController