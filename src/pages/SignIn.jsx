import React from "react";
import { styled } from "styled-components";
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
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Subtitle>to continue to YouTube</Subtitle>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign In</Button>

        <Subtitle>Or</Subtitle>
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
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
