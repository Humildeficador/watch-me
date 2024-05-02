/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { api } from "../services/api"

export interface GenreProps {
    id: number
    name: string
    title: string
}

interface GenreResponseProps {
    genres: Array<GenreProps>
}

export interface MoviesProps {
    imdbID: string
    Title: string
    Year: number
    Language: string
    Director: string
    Poster: string
    Runtime: string
    Genre_id: number
    Ratings: Array<{
        Source: string
        Value: string
    }>
}

interface MoviesResponseProps {
    movies: Array<MoviesProps>
}

interface GenresMoviesProviderProps {
    children: ReactNode
}

interface GenresMoviesContextDataType {
    genresList: Array<GenreProps>
    moviesList: Array<MoviesProps>
    handleActiveGenre: (genre: GenreProps) => void
    activeGenre: GenreProps
}

const GenresMoviesContext = createContext<GenresMoviesContextDataType>(
    {} as GenresMoviesContextDataType
)

export function GenresMoviesProvider({ children }: GenresMoviesProviderProps) {
    const [moviesList, setMoviesList] = useState<MoviesProps[]>([]);
    const [genresList, setGenresList] = useState<GenreProps[]>([]);
    const [activeGenre, setActiveGenre] = useState<GenreProps>(
        {
            "id": 1,
            "name": "action",
            "title": "Ação"
        }
    );
    const [filteredMovies, setFilteredMovies] = useState<MoviesProps[]>([]);

    useEffect(() => {
        api.get<GenreResponseProps>('/genres')
            .then(response => setGenresList(response.data.genres))
        api.get<MoviesResponseProps>('/movies')
            .then(response => setMoviesList(response.data.movies))
    }, [])

    function handleActiveGenre(genre: GenreProps) {
        setActiveGenre(genre)
    }

    useEffect(() => {
        setFilteredMovies(() => (
            moviesList.filter(movie => movie.Genre_id == activeGenre.id)
        ))
    }, [moviesList, activeGenre, genresList])

    return (
        <GenresMoviesContext.Provider value={{
            moviesList: filteredMovies,
            genresList,
            handleActiveGenre,
            activeGenre,
        }}>
            {children}
        </GenresMoviesContext.Provider>
    )
}

export function useGenresMovies() {
    const context = useContext(GenresMoviesContext)
    return context
}