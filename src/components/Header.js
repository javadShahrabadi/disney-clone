import React, { useEffect } from "react";
import styled from "styled-components";
import {
  selectUserName,
  setSignOut,
  setUserLogin,
} from "../features/user/userSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.email,
            email: user.email,
            photo:
              "https://e7.pngegg.com/pngimages/78/788/png-clipart-computer-icons-avatar-business-computer-software-user-avatar-child-face.png",
          })
        );
        history.push("/");
      }
    });
  }, []);
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      {!userName ? (
        <Link
          to='/login'
          style={{ marginLeft: "auto", color: "white", textDecoration: "none" }}
        >
          <Login>Login</Login>
        </Link>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src='/images/home-icon.svg' alt='home-icon' />
              <span>HOME</span>
            </a>
            <a>
              <img src='/images/search-icon.svg' alt='search-icon' />
              <span>SEARCH</span>
            </a>
            <a>
              <img src='/images/watchlist-icon.svg' alt='whatchlist-icon' />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src='/images/original-icon.svg' alt='original-icon' />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src='/images/movie-icon.svg' alt='movies-icon' />
              <span>MOVIES</span>
            </a>
            <a>
              <img src='/images/series-icon.svg' alt='series-icon' />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <span style={{ marginRight: "8px" }}>{userName}</span>
          <UserImg
            src='https://images.all-free-download.com/images/graphicthumb/cat_profile_196806.jpg'
            onClick={signOut}
            title={`Sign Out ${userName}`}
          />
          <span
            style={{ marginLeft: "8px", cursor: "pointer" }}
            onClick={signOut}
          >
            Sign Out
          </span>
        </>
      )}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow: hidden;
`;
const Logo = styled.img`
  width: 80px;
  cursor: pointer;
  @media (max-width: 830px) {
    margin-right: auto;
  }
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 25px;
  @media (max-width: 830px) {
    display: none;
  }
  a,
  .header-item {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1.42px;
      position: relative;
      &::after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  margin-left: auto;
  cursor: pointer;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    border-color: transparent;
    color: black;
  }
`;
