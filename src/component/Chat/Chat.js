import './Chat.scss';
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
import SendIcon from '@material-ui/icons/Send';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import LocalPrintshopOutlinedIcon from '@material-ui/icons/LocalPrintshopOutlined';
// import UploadFileIcon from '@material-ui/icons/UploadFile';

class Chat extends Component {
    render() {
        return (
            <Grid item xs={6} className="chat-grid">
                <List >
                    <Grid xs={8}>
                        <Grid item xs={7}>
                            <ListItem button key="RemySharp">
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                <ListItemText primary="John Wick"></ListItemText>
                                <ListItemText align="right" secondary="09:30"></ListItemText>
                            </ListItem>
                        </Grid>
                        <Grid xs={6} className="chat-block">
                            <ListItemText primary="Cool. i am good, let's catch up!"></ListItemText>
                        </Grid>
                    </Grid>
                </List>
                <List >
                    <Grid xs={8} >
                        <Grid item xs={7} >
                            <ListItem button key="RemySharp">
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                <ListItemText primary="John Wick"></ListItemText>
                                <ListItemText align="right" secondary="09:30"></ListItemText>
                            </ListItem>
                        </Grid>
                        <Grid xs={6} md={6} className="chat-block">
                            <ListItemText  primary="Cool. i am good, let's catch up!"></ListItemText>
                        </Grid>
                    </Grid>
                </List>
                <List >
                    <Grid xs={8} >
                        <Grid item xs={7} >
                            <ListItem button key="RemySharp">
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                <ListItemText primary="John Wick"></ListItemText>
                                <ListItemText align="right" secondary="09:30"></ListItemText>
                            </ListItem>
                        </Grid>
                        <Grid xs={6} md={6} className="chat-block">
                            <ListItemText primary="Cool. i am good, let's catch up!"></ListItemText>
                        </Grid>
                    </Grid>
                </List>
                <Grid container className="message">
                    <Grid item xs={8}>
                        <TextField id="outlined-basic-email" label="Type a message..." fullWidth />
                        
                    </Grid>
                    <Grid xs={1} align="right">
                        <Grid> <AddSharpIcon></AddSharpIcon></Grid>
                        {/* <Fab color="primary" aria-label="add"><SendIcon /></Fab> */}
                    </Grid>
                    <Grid xs={1} align="right">
                        <LocalPrintshopOutlinedIcon></LocalPrintshopOutlinedIcon>
                    </Grid>
                    <Grid xs={1} align="right">
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Chat;