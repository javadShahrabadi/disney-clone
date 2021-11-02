import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";
import Zoom from "react-reveal/Zoom";
function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        } else {
        }
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={movie.image} alt='background-page' />
      </Background>
      <ImageTitle>
        <img src='/images/viewers-disney.png' alt='logo-pic' />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src='/images/play-icon-black.png' alt='play-icon' />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src='/images/play-icon-white.png' alt='play-icon' />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWtachButton>
          <img src='/images/group-icon.png' alt='gruop-icon' />
        </GroupWtachButton>
      </Controls>

      <SubTitle>{movie.movieInfo}</SubTitle>

      <Zoom top>
        <Description>{movie.description}</Description>
      </Zoom>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 20vw;
  min-width: 200px;
  margin-top: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  letter-spacing: 1.8px;
  font-size: 12px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;

const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;

const AddButton = styled.button`
  margin-right: 12px;
  width: 44px;
  height: 44px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 20px;
    color: white;
  }
`;

const GroupWtachButton = styled(AddButton)``;
const SubTitle = styled.div`
  margin-top: 1.125rem;
  color: rgb(249, 249, 249);
  font-size: 0.8rem;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 18px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;
