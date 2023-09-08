import React from "react";
import { styled } from "styled-components";
import vinit from "../images/logo.png";
import Comment from "./Comment";

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;
const Avatar = styled.img`
  height: 35px;
  width: 35px;
  border: 1px solid white;
  border-radius: 50%;
`;
const Input = styled.input`
  width: 100%;
  border: 1px solid #000;
  border-left: 0 none;
  border-right: 0 none;
  border-top: 0 none;
  outline: none;
  background-color: transparent;
  padding: 5px;
  color: ${({ theme }) => theme.text};
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src={vinit} alt="" />
        <Input placeholder="Add your Comments...." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
