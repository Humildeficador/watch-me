import styled from "styled-components";
import { lighten } from "polished"

export const SidebarContainer = styled.header`
    span {
        color: var(--yellow);
        font-size: 3rem;
        font-weight: 600;

        margin-bottom: 4.5rem;
        span {
            color: var(--white);
        }
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 24rem;
    width: 100%;

    padding: 2rem;

    background: var(--background2);
`

export const ButtonContainer = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
`

interface GenreButtonProps {
    $isActive: boolean;
}

export const GenreButton = styled.button<GenreButtonProps>`
    width: 100%;

    background: ${(props) => props.$isActive
        ? 'var(--background-button2)'
        : 'var(--background-button)'
    };

    border: 0;
    border-radius: 0.25rem;
    height: 3rem;

    color: ${(props) => props.$isActive
        ? 'var(--yellow)'
        : 'var(--grey)'
    };

    font-size: 1.1rem;

    transition: background .2s;

    & + button {
        margin-top: 1rem;
    }

    &:hover {
        background: ${(props) => props.$isActive
            ? ''
            : lighten(0.03, '#373945')
        };
    }
`