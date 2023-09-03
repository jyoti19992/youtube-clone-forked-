import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { fetchFromAPI } from "../utils/fetchFromAPI"; 

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState({});
  const [videos, setVideos] = useState([]);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const channelData = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        console.log(channelData, "channeldata");
        setChannelDetail(channelData?.items[0]);

        const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
        console.log(videosData, "videos");
        setVideos(videosData?.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: '300px',
            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
