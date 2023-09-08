import React from "react";
import { styled } from "styled-components";
import vinit from "../images/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1.5;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 15px;
  overflow: auto;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  gap: 3px;
  font-weight: bold;
  margin-bottom: 25px;
`;
const Img = styled.img`
  height: 25px;
`;
const Plateform = styled.div`
  margin-top: 5px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Hr = styled.hr`
  margin: 7.5px 0px;
  border: 0.5 solid ${({ theme }) => theme.soft};
`;

const Login = styled.div`
  padding: 7.5px 0px;
`;
const Button = styled.button`\
  margin-top:10px;
  margin-left:60px;
  background:transparent;
  color:#3ea6ff;
  padding:5px 15px;
  border: 1px solid #3ea6ff;
  border-radius:5px;
  font-weight:500;
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:2px;
`;

const Minu = styled.div`
  padding-bottom: 18px;
`;

const Menu = ({ DarkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <Minu>
              <MenuIcon />
            </Minu>
            <Logo>
              <Img src={vinit} />
              <Plateform>YouTube</Plateform>
            </Logo>
          </Item>
          <Item>
            <HomeIcon />
            Home
          </Item>
          <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
          <Hr />
          <Item>
            <VideoLibraryOutlinedIcon />
            Library
          </Item>
          <Item>
            <HistoryOutlinedIcon />
            History
          </Item>
          <Hr />
          <Login>
            <Plateform>SignIn to like Videos,Comments and Subscribe</Plateform>
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          </Login>
          <Hr />
          <Item>
            <LibraryMusicOutlinedIcon />
            Music
          </Item>
          <Item>
            <SportsBasketballOutlinedIcon />
            Sport
          </Item>
          <Item>
            <SportsEsportsOutlinedIcon />
            Gaming
          </Item>
          <Item>
            <MovieCreationOutlinedIcon />
            Movies
          </Item>
          <Item>
            <NewspaperOutlinedIcon />
            News
          </Item>
          <Item>
            <LiveTvOutlinedIcon />
            Live
          </Item>
          <Hr />
          <Item>
            <SettingsOutlinedIcon />
            Setting
          </Item>
          <Item>
            <OutlinedFlagIcon />
            Report history
          </Item>
          <Item>
            <HelpOutlineOutlinedIcon />
            Help
          </Item>
          <Item onClick={() => setDarkMode(!DarkMode)}>
            <FeedbackOutlinedIcon />
            {DarkMode ? "Light" : "Dark"} Mode
          </Item>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Menu;
