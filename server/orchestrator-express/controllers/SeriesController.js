const axios = require("axios");
const Redis = require("ioredis");
const redis = new Redis();
const baseUrl = "http://localhost:4001/movies";

class SeriesController {
    static async find(req, res) {
        try {
            const series = await redis.get("series:data");
            if (series) {
                // console.log(series, "<<< series await redis");
                res.status(200).json(JSON.parse(series));
            } else {
                const getSeries = await axios({
                    url: baseUrl,
                    method: "GET",
                });
                // console.log(getSeries.data, "<<< get Series");
                await redis.set("series:data", JSON.stringify(getSeries.data));
                res.status(200).json(getSeries.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    static async create(req, res) {
        try {
            await redis.del("series:data");
            const { title, overview, poster_path, popularity, tags } = req.body;
            const input = {
                title,
                overview,
                poster_path,
                tags,
                popularity: parseFloat(popularity),
            };

            const newSeries = await axios({
                url: baseUrl,
                method: "POST",
                data: input,
            });

            res.status(201).json(newSeries.data);
        } catch (error) {
            console.log(error);
        }
    }

    static async update(req, res) {
        try {
            await redis.del("series:data");
            const { title, overview, poster_path, popularity, tags } = req.body;
            const input = {
                title,
                overview,
                poster_path,
                tags,
                popularity: parseFloat(popularity),
            };

            const updatedSeries = await axios({
                url: baseUrl + `/${req.params.id}`,
                method: "PUT",
                data: input,
            });

            res.status(200).json(updatedSeries.data);
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(req, res) {
        try {
            await redis.del("series:data");

            const deletedSeries = await axios({
                url: baseUrl + `/${req.params.id}`,
                method: "DELETE",
            });

            res.status(200).json(deletedSeries.data);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = SeriesController;
