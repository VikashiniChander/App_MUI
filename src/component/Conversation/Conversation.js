import './Conversation.scss';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import ComposeIcon from '../Common/ComposeIcon/ComposeIcon';
import Typography from '@material-ui/core/Typography';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const message = `Hi user! Need your help in setting up all things...`;


class Conversation extends Component {
    render() {
        return (
            <Grid className="blue-bg block-spacing"   >
                <Box>
                <Grid className="compose-block"><Box className="compose-button">
                    <ComposeIcon />
                    <Typography className="compose-text">Compose</Typography>

                </Box>
                </Grid>
                <Grid item xs={12}  container className="search-box" >
                    <Grid item xs={10} component="form" container className="search-icon">
                            <Grid xs={2}> <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton></Grid>
                            <Grid xs={10}> <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search..."
                            /></Grid>
                    </Grid>
                    <Grid  xs={1} className="filterIcon"><FilterListOutlinedIcon></FilterListOutlinedIcon></Grid>
                </Grid>
                <List className="message-block spacing white-bg">
                    <Grid className="dot"></Grid>

                    <Grid container >

                        <Grid item xs={2} md={3} ><ListItemIcon>
                            <Grid class="avatar"> <Grid className="dot-w">
                            <WhatsAppIcon className="whatsApp"></WhatsAppIcon></Grid> </Grid>

                        </ListItemIcon></Grid>
                        <Grid xs={6} md={9}>
                            <ListItem button key="RemySharp">
                                <ListItemText primary="John Wick" class="user-name"></ListItemText>
                                <ListItemText align="right" className="message" secondary="09:30 PM"></ListItemText>
                            </ListItem>
                            <ListItemText className="message">{message}</ListItemText>
                        </Grid>
                    </Grid>
                </List>
                <List className="message-block blue-bg">
                    <Grid className="dot"></Grid>
                    <Grid container>
                        <Grid item xs={2} md={3} ><ListItemIcon>
                        <Grid class="avatar"></Grid>
                            {/* <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" /> */}
                        </ListItemIcon></Grid>
                        <Grid item xs={6} md={9} >
                            <ListItem button key="RemySharp">
                                <ListItemText primary="John Wick" class="user-name"></ListItemText>
                                <ListItemText align="right" className="message" secondary="09:30 PM"></ListItemText>
                            </ListItem>
                            <ListItemText className="message">{message}</ListItemText>
                        </Grid>
                    </Grid>
                </List>
                <List className="message-block white-bg">
                    <Grid className="dot"></Grid>
                    <Grid container>
                        <Grid item xs={2} md={3} ><ListItemIcon>
                        <Grid class="avatar"></Grid>
                        </ListItemIcon></Grid>
                        <Grid item xs={6} md={9} >
                            <ListItem button key="RemySharp">
                                <ListItemText primary="John Wick" class="user-name"></ListItemText>
                                <ListItemText align="right" className="message" secondary="09:30 PM"></ListItemText>
                            </ListItem>
                            <ListItemText className="message">{message}</ListItemText>
                        </Grid>
                    </Grid>
                </List>
                <List className="message-block spacing blue-bg">
                    <Grid className="dot"></Grid>
                    <Grid container>
                        <Grid item xs={2} md={3} ><ListItemIcon>
                        <Grid class="avatar"></Grid>
                        </ListItemIcon></Grid>
                        <Grid xs={6} md={9}>
                            <ListItem button key="RemySharp">
                                <ListItemText primary="John Wick" class="user-name"></ListItemText>
                                <ListItemText align="right" className="message" secondary="09:30 PM"></ListItemText>
                            </ListItem>
                            <ListItemText className="message">{message}</ListItemText>
                        </Grid>
                    </Grid>
                </List>
                <List className="message-block white-bg">
                    <Grid className="dot"></Grid>
                    <Grid container>
                        <Grid item xs={2} md={3} ><ListItemIcon>
                        <Grid class="avatar"></Grid>
                        </ListItemIcon></Grid>
                        <Grid item xs={6} md={9} >
                            <ListItem button key="RemySharp">
                                <ListItemText primary="John Wick" class="user-name"></ListItemText>
                                <ListItemText align="right" className="message" secondary="09:30 PM"></ListItemText>
                            </ListItem>
                            <ListItemText className="message">{message}</ListItemText>
                        </Grid>
                    </Grid>
                </List>
                <List className="message-block blue-bg">
                    <Grid className=" dot"></Grid>
                    <Grid container>
                        <Grid item xs={2} md={3} ><ListItemIcon>
                        <Grid class="avatar"></Grid>
                        </ListItemIcon></Grid>
                        <Grid item xs={6} md={9} >
                            <ListItem button key="RemySharp">
                                <ListItemText primary="John Wick" class="user-name"></ListItemText>
                                <ListItemText align="right" className="message" secondary="09:30 PM"></ListItemText>
                            </ListItem>
                            <ListItemText className="message">{message}</ListItemText>
                        </Grid>
                    </Grid>
                </List>
            </Box>

            </Grid>


        )
    }
}

export default Conversation;