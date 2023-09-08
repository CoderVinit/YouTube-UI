import React from "react";
import { styled } from "styled-components";
import vinit from "../images/logo.png";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  height: 35px;
  width: 35px;
  border: 1px solid white;
  border-radius: 50%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Name = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  margin-left: 5px;
`;
const Date = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 13px;
  font-weight: 400;
`;
const Description = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;
const Comment = () => {
  return (
    <Container>
      <Avatar src={vinit} alt="" />
      <Details>
        <Name>
          Vinit <Date> 1 day , ago</Date>
        </Name>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          voluptatum omnis facere, voluptatibus dolorem esse!
        </Description>
      </Details>
    </Container>
  );
};

export default Comment;
