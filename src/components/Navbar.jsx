import { Mail, NotificationAdd, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';


const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent : "space-between"
})


const Search = styled("div")(({theme}) => ({
    backgroundColor : "white",
    pading: "0 10px",
    borderRadius : theme.shape.borderRadius,
    width : "40%"
})
)

const Icons = styled(Box)(({theme}) => ({
    display : "none",
    gap:"20px",
    alignItems : "center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }


})
)

const UserBox = styled(Box)(({theme}) => ({
    display : "flex",
    gap:"10px",
    alignItems : "center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }


})
)



const Navbar = () => {

    const [open ,setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolbar >
                <Typography variant="h6" sx={{display: {xs:"none",sm:"block"}}}>
                    Navbar

                </Typography>
                <Pets sx={{display: {xs:"block",sm:"none"}}}/>
                <Search><InputBase placeholder='Search' p={3}/></Search>
                <Icons>
                    <Badge badgeContent={4} color="primary">
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={4} color="primary">
                        <NotificationAdd/>
                    </Badge>
                    <Avatar sx={{width:30,height : 30 }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                    onClick={e=>setOpen(true)}
                    />
                </Icons>
                <UserBox  onClick={e=>setOpen(true)}>
                <Avatar sx={{width:30,height : 30 }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"/>
                <Typography>John</Typography>

                </UserBox>

            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
              
                open={open}
                onClose={e=>setOpen(false)}
               
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
            
        </AppBar>
    );
};

export default Navbar;