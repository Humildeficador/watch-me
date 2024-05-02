import { useGenresMovies } from "../../hooks/useGenresMovies";
import { ButtonContainer, GenreButton, SidebarContainer } from "./styles";

export function Header() {
    const { genresList, handleActiveGenre, activeGenre } = useGenresMovies()

    return (
        <SidebarContainer>
            <span>
                Watch
                <span>Me</span>
            </span>
            <ButtonContainer>
                {genresList.map(genre => {
                    return (
                        <GenreButton
                            key={genre.id}
                            onClick={() => handleActiveGenre(genre.id)}
                            $isActive={activeGenre == genre.id}
                        >
                            {genre.title}
                        </GenreButton>
                    )
                })}
            </ButtonContainer>
        </SidebarContainer>
    )
}