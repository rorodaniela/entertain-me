const axios = require("axios");
const Redis = require("ioredis");
const redis = new Redis();
const baseUrl = "http://localhost:4001/movies";

class EntertainMeController {
    static async findAll(req, res) {
        try {
            const entertainMe = await redis.get("entertainMe:data");
            if (entertainMe) {
                // console.log(series, "<<< series await redis");
                res.status(200).json(JSON.parse(entertainMe));
            } else {
                const getSeries = await axios({
                    url: baseUrl,
                    method: "GET",
                });

                const getMovies = await axios({
                    url: baseUrl,
                    method: "GET",
                });

                const allData = {
                    movies: getMovies.data,
                    series: getSeries.data
                }
                await redis.set("entertainMe:data", JSON.stringify(allData));
                res.status(200).json(allData);
            }
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = EntertainMeController;
