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
import CheckIcon from '@material-ui/icons/Check';

// import UploadFileIcon from '@material-ui/icons/UploadFile';

class Chat extends Component {
    render() {
        return (
            <Grid item xs={7} className="chat-grid">
                <List className="chat-left">
                    <Grid >
                        <Grid >
                            <ListItem button key="RemySharp">
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                <ListItemText className="userName" primary="John Wick"></ListItemText>
                                <ListItemText className="timeStamp" secondary="09:30"></ListItemText>
                            </ListItem>
                        </Grid>
                        <Grid className="chat-block">
                            <ListItemText primary="Cool. i am good, let's catch up!"></ListItemText>
                        </Grid>
                        <CheckIcon className="tickGreen" />
                    </Grid>
                </List>
                <List className="chat-right">
                    <Grid>
                        <Grid >
                            <ListItem button key="RemySharp">
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                <ListItemText className="userName" primary="John Wick"></ListItemText>
                                <ListItemText className="timeStamp" secondary="09:30"></ListItemText>
                            </ListItem>
                        </Grid>
                        <Grid className="chat-block">
                            <ListItemText  primary="Cool. i am good, let's catch up!"></ListItemText>
                        </Grid>
                        <CheckIcon className="tickGreen" />
                    </Grid>
                </List>
                <List className="chat-left">
                    <Grid >
                        <Grid  className="chat-msg" >
                            <ListItem button key="RemySharp" >
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                <ListItemText className="userName" primary="John Wick"></ListItemText>
                                <ListItemText className="timeStamp" secondary="09:30"></ListItemText>
                            </ListItem>
                        </Grid>
                        <Grid className="chat-block">
                            <ListItemText primary="Cool. i am good, let's catch up!"></ListItemText>
                        </Grid>
                        <Grid className="chat-block">
                            <ListItemText primary="Cool. i am good, let's catch up!"></ListItemText>
                        </Grid>
                        <CheckIcon className="tickGreen" />
                    </Grid>
                </List>
                <Divider />
                <Grid container className="message-box ">
                    {/* <Grid item xs={8}>
                        <TextField id="outlined-basic-email" label="Type a message..." fullWidth />
                        
                    </Grid>
                    <Grid xs={1} className="icon">
                        <Grid> <AddSharpIcon></AddSharpIcon></Grid>
                    </Grid>
                    <Grid xs={1} className="icon">
                        <LocalPrintshopOutlinedIcon></LocalPrintshopOutlinedIcon>
                    </Grid>
                    <Grid xs={1} className="icon">
                    </Grid> */}
                </Grid>
            </Grid>
        )
    }
}

export default Chat;