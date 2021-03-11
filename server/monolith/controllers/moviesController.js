const Movies = require('../models/movies')

class MoviesController {
    static async find(req, res) {
        try {
            const movies = await Movies.find();
            res.json(movies);
        } catch (error) {
            console.log(error);
        }
    }

    static async create(req, res) {
        try {
            const newMovie = await Movies.create(req.body);
            res.json(newMovie);
        } catch (error) {
            console.log(error);
        }
    }

    static async update(req, res) {
        try {
            const updatedMovie = await Movies.update(req.params.id, req.body);
            res.json(updatedMovie);
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(req, res) {
        try {
            const deleteMovie = await Movies.delete(req.params.id);
            res.json(deleteMovie);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = MoviesController