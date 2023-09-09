import { SearchOutlined } from "@mui/icons-material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  background-color: ${({ theme }) => theme.bgLighter};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  padding: 0px 16px;
  position: relative;
`;
const Search = styled.div`
  display: flex;
  position: absolute;
  left: 300px;
  align-items: center;
  margin-top: 13px;
  margin-bottom: 13px;
`;
const Input = styled.input`
  width: 30vw;
  height: 2.8rem;
  background: ${({ theme }) => theme.bgLighter};
  outline: none;
  border: none;
  border-radius: 1.625rem 0 0 1.625rem;
  padding: 0 3.5rem 0 1.5rem;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.unique};
  color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
  margin-top: 10px;
  margin-left: 60px;
  background: transparent;
  color: #3ea6ff;
  padding: 5px 15px;
  border: 1px solid #3ea6ff;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
  text-decoration: none;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
`;
const Avatar = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input
            id="searchQueryInput"
            type="text"
            name="searchQueryInput"
            placeholder="Search"
          />
          <SearchOutlined
            style={{
              height: "45px",
              width: "30px",
              background: `hsl(0, 0%, 18.82%)`,
              padding: "0 20px",
              borderRadius: "0 1.625rem 1.625rem 0",
              outline: "none",
              cursor: "pointer",
              border: "2px solid hsl(0, 0%, 18.82%)",
              color: "white",
              opacity: "0.6",
            }}
          />
        </Search>
        {currentUser ? (
          <User>
            <VideoCallOutlinedIcon />
            <Avatar src={currentUser.img} />
            {currentUser.name}
          </User>
        ) : (
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
