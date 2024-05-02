import { useGenresMovies } from "../../hooks/useGenresMovies";
import { MainContainer, MainContent, MovieCard } from "./styles";

export function Main() {
    const { moviesList } = useGenresMovies()

    return (
        <MainContainer>
            <h1>Categoria: Ação</h1>
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
                                        {movie.Ratings[0].Value}
                                    </div>

                                    <div className="movie-duraction">
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