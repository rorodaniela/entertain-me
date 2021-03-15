import { gql } from "@apollo/client"

export const GETALL = gql`
    query GETALL {
        movies {
            _id
            title
            overview
            poster_path
            popularity
        }
        series {
            _id
            title
            overview
            poster_path
            popularity
        }
    }
`;

export const GETMOVIES = gql`
    query GETMOVIES {
        movies {
            _id
            title
            poster_path
            popularity
        }
    }
`;

export const GETSERIES = gql`
    query GETSERIES {
        series {
            _id
            title
            poster_path
            popularity
        
        }
    }
`;

export const MOVIEBYID = gql`
    query movieById($userId: ID) {
        movieById(id: $userId) {
            _id
            title
            overview
            poster_path
            popularity
            tags
        }
    }
`;

export const SERIEBYID = gql`
    query serieById {
        serieById(id: ID) {
            _id
            title
            overview
            poster_path
            popularity
            tags
        }
    }
`;

export const POSTMOVIE = gql`
    mutation POSTMOVIE($newData: inputMovie) {
        addMovie(newMovie: $newData) {
            title
            overview
            popularity
        }
    }
`;

// export const POSTSerie = gql`
//     mutation POSTSerie($addSerie: inputSerie) {
//         addSerie(newSerie: $addSerie) {
//             title
//             overview
//             popularity
//         }
//     }
// `;

// export const DELETEMOVIE = gql`
//     mutation DELETEMOVIE($deleteMovie: inputDelete) {
//         deleteMovie(id: $deleteMovie) {
//             _id
//             message
//         }
//     }
// `;

// export const DELETESERIE = gql`
//     mutation DELETESERIE($deleteSerie: inputDelete) {
//         deleteSerie(id: $deleteSerie) {
//             _id
//             message
//         }
//     }
// `;

// export const UPDATEMOVIES = gql`
//     mutation UPDATEMOVIE($updateMovie: inputUpdate) {
//         updateMovie(updatedMovie: $updateMovie) {
//             _id
//             title
//             overview
//             poster_path
//             tags
//             popularity
//         }
//     }
// `;

// export const UPDATESERIE = gql`
//     mutation UPDATESERIE($updateSerie: inputUpdate) {
//         updateSerie(updatedSerie: $updateSerie) {
//             _id
//             title
//             overview
//             poster_path
//             tags
//             popularity
//         }
//     }
// `;
