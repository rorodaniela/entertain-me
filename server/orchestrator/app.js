const {ApolloServer, gql, ApolloError} = require('apollo-server')
const axios = require("axios");
const Redis = require("ioredis");
const redis = new Redis();
const urlMovies = "http://localhost:4001/movies/";
const urlSeries = "http://localhost:4002/series/";


const typeDefs = gql`
    type Movie {
        _id: ID
        title: String
        overview: String
        poster_path: String
        tags: [String]
        popularity: Float
    }

    type Serie {
        _id: ID
        title: String
        overview: String
        poster_path: String
        tags: [String]
        popularity: Float
    }

    type userId {
        _id : ID
    }

    type Query {
        movies: [Movie]
        series: [Serie]
        movieById(id: ID): Movie
        serieById(id: ID): Serie
    }

    input inputMovie {
        title: String!
        overview: String!
        poster_path: String!
        tags: [String]
        popularity: Float!
    }

    input inputSerie {
        title: String!
        overview: String!
        poster_path: String!
        tags: [String]
        popularity: Float!
    }

    type Status {
        message: String
    }

    input inputDelete {
        _id: ID!
    }

    input inputUpdate {
        _id: ID!
        title: String!
        overview: String!
        poster_path: String!
        tags: [String]
        popularity: Float!
    }

    type Mutation {
        addMovie(newMovie: inputMovie): Movie
        addSerie(newSerie: inputSerie): Serie
        deleteMovie(id: inputDelete): Status
        deleteSerie(id: inputDelete): Status
        updateMovie(updatedMovie: inputUpdate): Movie
        updateSerie(updatedSerie: inputUpdate): Serie
    }
`;

const resolvers = {
    Query: {
        movies: async () => {
            try {
                const moviesCache = await redis.get("movies:data");
                if (moviesCache) {
                    return JSON.parse(moviesCache);
                } else {
                    const dataMovies = await axios({
                        url: urlMovies,
                        method: "GET",
                    });
                    await redis.set(
                        "movies:data",
                        JSON.stringify(dataMovies.data)
                    );
                    return dataMovies.data;
                }
            } catch (error) {
                // console.log(error, "<<< error");
                return new ApolloError(error);
            }
        },
        series: async () => {
            try {
                const seriesCache = await redis.get("series:data");
                if (seriesCache) {
                    return JSON.parse(seriesCache);
                } else {
                    const dataseries = await axios({
                        url: urlSeries,
                        method: "GET",
                    });
                    await redis.set(
                        "series:data",
                        JSON.stringify(dataseries.data)
                    );
                    return dataseries.data;
                }
            } catch (error) {
                return new ApolloError(error);
            }
        },
        movieById: async (_, args) => {
            try {
                const {data} = await axios({
                    url: urlMovies + args.id,
                    method: "GET",
                });
                return data;
            
            } catch (error) {
                console.log(error, "<<<");
                return new ApolloError(error);
            }
        },
        serieById: async (_, args) => {
            try {
                const serieCache = await redis.get("serie:data");
                if (serieCache) {
                    return JSON.parse(serieCache);
                } else {
                    const dataserie = await axios({
                        url: urlSeries + args.id,
                        method: "GET",
                    });
                    await redis.set(
                        "serie:data",
                        JSON.stringify(dataserie.data)
                    );
                    return dataserie.data;
                }
            } catch (error) {
                // console.log(error, "<<< error");
                return new ApolloError(error);
            }
        },
    },
    Mutation: {
        addMovie: async (_, args) => {
            try {
                const result = await axios({
                    url: urlMovies,
                    method: "POST",
                    data: args.newMovie,
                });
                await redis.del("movies:data");
                return result.data.ops[0];
            } catch (error) {
                return new ApolloError(error);
            }
        },
        addSerie: async (_, args) => {
            try {
                const result = await axios({
                    url: urlSeries,
                    method: "POST",
                    data: args.newSerie,
                });
                await redis.del("series:data");
                return result.data.ops[0];
            } catch (error) {
                return new ApolloError(error);
            }
        },
        deleteMovie: async (_, args) => {
            console.log("<< masuk orchestra delet");
            try {
                console.log(args.id._id, "<< id dari orches");
                const deletedMovie = await axios({
                    url: urlMovies + args.id._id,
                    method: "DELETE",
                });
                console.log(deletedMovie, "<<< delete dari oches");
                await redis.del("movies:data");
                return deletedMovie.data;
            } catch (error) {
                return new ApolloError(error);
            }
        },
        deleteSerie: async (_, args) => {
            try {
                console.log(args.id._id, "<< id");
                const deletedSerie = await axios({
                    url: urlSeries + args.id._id,
                    method: "DELETE",
                });
                await redis.del("series:data");
                return deletedSerie.data;
            } catch (error) {
                return new ApolloError(error);
            }
        },
        updateMovie: async (_, args) => {
            try {
                console.log(args, "<<< input");
                const dataUpdate = {
                    title: args.updatedMovie.title,
                    overview: args.updatedMovie.overview,
                    poster_path: args.updatedMovie.poster_path,
                    tags: args.updatedMovie.tags,
                    popularity: args.updatedMovie.popularity,
                };
                const result = await axios({
                    url: urlMovies + args.updatedMovie._id,
                    method: "PUT",
                    data: dataUpdate,
                });
                await redis.del("movies:data");
                return result.data.ops[0];
            } catch (error) {
                return new ApolloError(error);
            }
        },
        updateSerie: async (_, args) => {
            try {
                const dataUpdate = {
                    title: args.updatedSerie.title,
                    overview: args.updatedSerie.overview,
                    poster_path: args.updatedSerie.poster_path,
                    tags: args.updatedSerie.tags,
                    popularity: args.updatedSerie.popularity,
                };
                const result = await axios({
                    url: urlSeries + args.updatedSerie._id,
                    method: "PUT",
                    data: dataUpdate,
                });
                await redis.del("series:data");
                return result.data.ops[0];
            } catch (error) {
                return new ApolloError(error);
            }
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => console.log(`Apollo Server dijalankan di ${url}`, url))