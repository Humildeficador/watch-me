import styled from "styled-components";

export const MainContainer = styled.main`
    padding: 3rem 14rem;
    width: 100%;

    h1 {
        margin-bottom: 2rem;

        span {
            color: var(--white);
        }
    }
`

export const MainContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 5em;
`

export const MovieCard = styled.div`
    position: relative;

    cursor: pointer;

    height: 400px;
    width: 270px;

    border-radius: 0.25rem;
    
    img {
        width: 270px;
        height: 400px;
        opacity: 0.6;
    }

    &:hover img {
        opacity: 0.25;
    }

    .movie-info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 1rem 1.5rem;

        .movie-title {
            font-weight: 600;
            font-size: 1.3rem;
            color: var(--white);
        }
        
        > div {
            margin-top: 0.5rem;
            display: flex;
            justify-content: space-between;

            .movie-rating, .movie-duraction {
                font-size: 1.1rem;
                font-weight: 600;
                display: flex;
                gap: .25em;
                align-items: center;
            }
        }
    }
`