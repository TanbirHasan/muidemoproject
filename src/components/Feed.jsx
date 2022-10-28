import { Avatar, Box } from "@mui/material";

import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <h3>This is feed</h3>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
