import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Home = ({ type }) => {
  const [Videos, setVideos] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const res = await axios.get(`http://localhost:8000/api/videos/${type}`);
      setVideos(res.data);
    };
    sendRequest();
  }, [type]);

  return (
    <Container>
      {Videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
