import { gql } from "@apollo/client"

export const GETALL = gql`
    query GETALL {
        movies {
            _id
            title
        }
        series {
            _id
            title
        }
    }
`;

export const GETMOVIES = gql`
    query GETMOVIES {
        movies {
            _id
            title
        }
    }
`;

export const GETSERIES = gql`
    query GETSERIES {
        series {
            _id
            title
        }
    }
`;

// export const POSTMOVIE = gql`
//     mutation POSTMOVIE($addMovie: inputMovie) {
//         addMovie(newMovie: $addMovie) {
//             title
//             overview
//             popularity
//         }
//     }
// `;

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
