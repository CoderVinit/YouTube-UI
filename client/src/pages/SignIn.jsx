import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
const Container = styled.div`
  height: calc(100vh-60px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.soft};
  border: 1px solid white;
  //   box-shadow: 10px 15px 15px cyan;
  padding: 20px 50px;
  gap: 10px;
  position: relative;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
`;
const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  padding: 10px;
  outline: none;
`;
const Button = styled.button`
  padding: 8px;
  border-radius: 5px;
  color: ${({ theme }) => theme.bgSoft};
  background-color: ${({ theme }) => theme.button};
  cursor: pointer;
`;
const More = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;
const Links = styled.div`
  display: flex;
  gap: 10px;
`;
const Link = styled.span`
  cursor: pointer;
`;

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:8000/api/auth/signin", {
        name,
        password,
      });
      dispatch(loginSuccess(res.data));
    } catch (error) {
      dispatch(loginFailure());
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Subtitle>to continue to YouTube</Subtitle>
        <Input
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign In</Button>

        <Subtitle>Or</Subtitle>
        <Input
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Term</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
