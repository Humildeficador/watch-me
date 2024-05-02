import { useGenresMovies } from "../../hooks/useGenresMovies";
import { MainContainer, MainContent, MovieCard } from "./styles";
import { Star, Clock } from 'lucide-react'

export function Main() {
    const { moviesList, activeGenre } = useGenresMovies()

    return (
        <MainContainer>
            <h1>
                Categoria:
                <span> {activeGenre.title}</span>
            </h1>
            <MainContent>
                {moviesList.map(movie => {
                    return (
                        <MovieCard key={movie.imdbID}>
                            <img
                                src={movie.Poster}
                                alt={`${movie.Title} poster`}
                            />

                            <div className="movie-info">
                                <span className="movie-title">
                                    {movie.Title}
                                </span>
                                <div>
                                    <div
                                        className="movie-rating"
                                    >
                                        <Star color="#FAE800"/>
                                        {movie.Ratings[0].Value}
                                    </div>

                                    <div className="movie-duraction">
                                        <Clock color="#FAE800"/>
                                        {movie.Runtime}
                                    </div>
                                </div>
                            </div>

                        </MovieCard>
                    )
                })}
            </MainContent>
        </MainContainer>
    )
}