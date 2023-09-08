import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "8px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Img = styled.img`
  width: ${(props) => (props.type === "sm" ? "70%" : "100%")};
  height: ${(props) => (props.type === "sm" ? "130px" : "202px")};
  border-radius: 20px;
  flex: 1;
`;
const ChannelImg = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: ${(props) => props.type === "sm" && "none"};
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => (props.type === "sm" ? "0px" : "16px")};
  gap: 10px;
  flex: 1;
`;
const Text = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-size: 16px;
  font-weight: ${(props) => (props.type === "sm" ? 900 : 500)};
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 6px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Img
          src="https://images.unsplash.com/photo-1522873771509-05addcdfb16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          type={type}
        />
        <Details type={type}>
          <ChannelImg
            src="https://images.unsplash.com/photo-1552843389-b22eaaf3a400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            type={type}
          />
          <Text>
            <Title>Hye</Title>
            <ChannelName>Test video</ChannelName>
            <Info>60 views . 1 day ago</Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
