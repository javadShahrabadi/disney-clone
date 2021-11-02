import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movies/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
function Movies() {
  const Movies = useSelector(selectMovies);
  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        {Movies &&
          Movies.map((movie) => (
            <Fade top key={movie.id}>
              <Wrap>
                <Link to={`/detail/${movie.id}`}>
                  <img src={movie.cardImg} alt={movie.name} />
                </Link>
              </Wrap>
            </Fade>
          ))}
      </Content>
    </Container>
  );
}

export default Movies;
const Container = styled.div`
  padding: 0 26px;
  padding-top: 30px;
  margin-top: 30px;
  h4 {
    font-size: 14px;
    padding-left: 5px;
  }
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;
  }
`;
