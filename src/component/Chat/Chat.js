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


class Chat extends Component {
    render() {
        return (
            <Grid item xs={6}>
                {/* <List className="messageArea">
                <ListItem key="1">
                    
                    <Grid container>
                        <Grid item xs={12}> 
                        <ListItemIcon float="right">
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        <ListItemText align="right" secondary="09:30"></ListItemText>
                        </ListItemIcon>

                        <ListItemText align="right" primary="John Wick"></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align="right" secondary="09:30"></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem key="2">
                    <Grid container>
                        <Grid item xs={12}>
                            <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align="left" secondary="09:31"></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem key="3">
                    <Grid container>
                        <Grid item xs={12}>
                            <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align="right" secondary="10:30"></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>
            </List> */}
                <List >
                    <Grid spacing={4}>
                        <Grid item xs={6} md={6}>
                            <ListItem button key="RemySharp">
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                <ListItemText primary="John Wick"></ListItemText>
                                <ListItemText align="right" secondary="09:30"></ListItemText>
                            </ListItem>
                        </Grid>
                        <Grid xs={6} md={6} className="chat-block">
                            <ListItemText className="message" primary="Cool. i am good, let's catch up!"></ListItemText>
                        </Grid>
                    </Grid>
                </List>
                <List >
                    <Grid spacing={4} alignItems="flex-end"
                        justify="flex-end"
                        direction="row" >
                        <Grid item xs={6} md={6}>
                            <ListItem button key="RemySharp">
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                <ListItemText primary="John Wick"></ListItemText>
                                <ListItemText align="right" secondary="09:30"></ListItemText>
                            </ListItem>
                        </Grid>
                        <Grid xs={6} md={6} className="chat-block">
                            <ListItemText className="message" primary="Cool. i am good, let's catch up!"></ListItemText>
                        </Grid>
                    </Grid>
                </List>
                <Divider />
                <Grid container style={{ padding: '20px' }}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-email" label="Type Something" fullWidth />
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Chat;