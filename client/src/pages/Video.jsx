import React from "react";
import { styled } from "styled-components";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import vinit from "../images/logo.png";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  gao: 5px;
`;
const Recommandations = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Image = styled.img`
  height: 35px;
  width: 35px;
  border: 1px solid white;
  border-radius: 50%;
`;
const ChannelDetail = styled.div``;
const ChannelName = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;
const Channelsubscriber = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
const Subscribe = styled.button`
  padding: 10px 15px;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.bgLighter};
  font-size: 16px;
  border-radius: 50px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Video = ({ video }) => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="450"
            src={video.videoUrl}
            title="Youtube video player"
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>48,645 views . jan 22, 2020</Info>
          <Buttons>
            <Button>
              <ThumbUpOffAltIcon />
              200
            </Button>
            <Button>
              <ThumbDownOffAltIcon />
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon />
              Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image alt="" src={vinit} />
            <ChannelDetail>
              <ChannelName>Vinit</ChannelName>
              <Channelsubscriber>20k Subscribers</Channelsubscriber>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommandations>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommandations>
    </Container>
  );
};

export default Video;
