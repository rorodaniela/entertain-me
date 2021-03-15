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

    type Query {
        movies: [Movie]
        series: [Serie]
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
        _id: ID
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
                console.log("MASUK BANG");
                if (moviesCache) {
                    console.log(moviesCache, "<<< cache");
                    return JSON.parse(moviesCache);
                } else {
                    const dataMovies = await axios({
                        url: urlMovies,
                        method: "GET",
                    });
                    console.log(dataMovies.data, "<<< datamovies");
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
                console.log("MASUK BANG");
                if (seriesCache) {
                    console.log(seriesCache, "<<< cache");
                    return JSON.parse(seriesCache);
                } else {
                    const dataseries = await axios({
                        url: urlSeries,
                        method: "GET",
                    });
                    console.log(dataseries.data, "<<< dataseries");
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
    },
    Mutation: {
        addMovie: async (_, args) => {
            try {
                const result = await axios({
                    url: urlMovies,
                    method: "POST",
                    data: args.newMovie,
                });
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
                return result.data.ops[0];
            } catch (error) {
                return new ApolloError(error);
            }
        },
        deleteMovie: async (_, args) => {
            try {
                console.log(args.id._id, "<< id");
                const deletedMovie = await axios({
                    url: urlMovies + args.id._id,
                    method: "DELETE",
                });
                console.log(deletedMovie.data, "<<< deleted movie");
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
                console.log(deletedSerie.data, "<<< deleted Serie");
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
                console.log(result.data.ops[0], "<<< res put");
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