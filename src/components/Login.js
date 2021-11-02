import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { setUserLogin } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((auth) => {
        let indexSplit = auth.user.email.indexOf("@");
        let username = auth.user.email.substring(0, indexSplit);

        dispatch(
          setUserLogin({
            name: username,
            email: auth.user.email,
            photo:
              "https://e7.pngegg.com/pngimages/78/788/png-clipart-computer-icons-avatar-business-computer-software-user-avatar-child-face.png",
          })
        );
        history.push("/");
      })
      .catch((error) => alert(error.message));
    setEmail("");
    setPass("");
  };
  return (
    <Container>
      <CTA>
        <CTALogoOne src='/images/cta-logo-one.svg'></CTALogoOne>
        <LoginForm>
          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </LoginForm>
        <SignUp onClick={signUp}>GET ALL THERE</SignUp>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          provident architecto corporis illum est minus quas deserunt porro,
          velit molestiae.
        </Description>
        <CTALogoTwo src='/images/cta-logo-two.png'></CTALogoTwo>
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    opacity: 0.7;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    z-index: -1;
  }
`;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;
const CTALogoOne = styled.img``;
const SignUp = styled.a`
  text-align: center;
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;

  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 0.75rem;
  letter-spacing: 1.2px;
  text-align: center;
  line-height: 1.5;
`;
const CTALogoTwo = styled.img`
  padding: 0 25px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    padding: 10px 15px;
    margin-top: 0.75rem;
    border: transparent;
    outline: 0;
    border-radius: 4px;
  }
`;
