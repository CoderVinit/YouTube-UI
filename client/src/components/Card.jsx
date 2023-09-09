import axios from "axios";
import React, { useEffect, useState } from "react";
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

const Card = ({ type, video }) => {
  const [User, setUser] = useState({});

  useEffect(() => {
    const sendRequest = async () => {
      const res = await axios.get(
        `http://localhost:8000/api/users/find/${video.userId}`
      );
      setUser(res.data);
    };
    sendRequest();
  }, [video.userId]);

  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Img src={video.imgUrl} alt="" type={type} />
        <Details type={type}>
          <ChannelImg src={User.img} alt="" type={type} />
          <Text>
            <Title>{video.title}</Title>
            <ChannelName>{User.name}</ChannelName>
            <Info>
              {video.views} views . {video.createdAt}
            </Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
