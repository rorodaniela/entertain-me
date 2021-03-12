const axios = require('axios')
const Redis = require('ioredis')
const redis = new Redis()
const baseUrl = "http://localhost:4001/movies"

class MovieController {
    static async find(req, res) {
        try {
            const movies = await redis.get("movies:data")
            if (movies) {
                // console.log(movies, "<<< movies await redis");
                res.status(200).json(JSON.parse(movies))
            } else {
                const getMovies = await axios({
                    url: baseUrl,
                    method: "GET"
                });
                // console.log(getMovies.data, "<<< get movies");
                await redis.set("movies:data", JSON.stringify(getMovies.data))
                res.status(200).json(getMovies.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    static async create(req, res) {
        try {
            await redis.del("movies:data")
            const {title, overview, poster_path, popularity, tags} = req.body
            const input = {
                title,
                overview,
                poster_path,
                tags,
                popularity: parseFloat(popularity)
            }
    
            const newMovie = await axios({
                url: baseUrl,
                method: "POST",
                data: input
            })
            
            res.status(201).json(newMovie.data)
        } catch (error) {
            console.log(error);
        }
    }

    static async update(req, res) {
        try {
            await redis.del("movies:data");
            const { title, overview, poster_path, popularity, tags } = req.body;
            const input = {
                title,
                overview,
                poster_path,
                tags,
                popularity: parseFloat(popularity),
            };

            const updatedMovie = await axios({
                url: baseUrl + `/${req.params.id}`,
                method: "PUT",
                data: input,
            });

            res.status(200).json(updatedMovie.data);
        } catch (error) {
            console.log(error);
        }
    }

    static async delete (req, res) {
        try {
            await redis.del("movies:data");

            const deletedMovie = await axios({
                url: baseUrl + `/${req.params.id}`,
                method: "DELETE"
            });

            res.status(200).json(deletedMovie.data);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = MovieController