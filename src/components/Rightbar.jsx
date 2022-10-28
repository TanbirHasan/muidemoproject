import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const Rightbar = () => {
  const [itemData, setData] = useState([]);

  useEffect(() => {
    fetch("image.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <Box
      //   bgcolor="pink"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="static" width={300} height="auto">
        <Typography variant="h6" fontWeight="100">
          Online Friends and their relatives
        </Typography>
        <h3>Online people</h3>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://portal.bilardo.gov.tr/assets/pages/media/profile/profile_user.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-caucasian-businessman-pose-at-workplace-picture-id1307791650?k=20&m=1307791650&s=612x612&w=0&h=AtY8JjUHQACgKLTYy8vzmvLmgQVJqdK5O0RnArzRhOs="
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-caucasian-businessman-in-glasses-picture-id1303206642?k=20&m=1303206642&s=612x612&w=0&h=AYvLxLY1t6pT5tj7vfBqljXHUSOWpUtsLHmZqlHKQQA="
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight="100" marginTop={5}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
        <Typography variant="h6" fontWeight="100" marginTop={5}>
          Latest Photos
        </Typography>
        <ImageList
          sx={{ width: 300, height: 450, marginTop: 2 }}
          cols={3}
          rowHeight={164}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
