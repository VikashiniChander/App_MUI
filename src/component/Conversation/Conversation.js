import './Conversation.css';
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


const message = `Hi user! Need your help in setting up all things for all the new`

class Conversation extends Component {
    render() {
        return (
            <Grid item xs={3} className="fullblock">

                <Grid className="compose-block"><Box className="compose-button"></Box></Grid>
                <Grid item xs={12}>
                    <TextField fullWidth className="searchbox" />
                </Grid>
                <List className="message-block spacing">
                    <Grid container>
                        <Grid> </Grid>
                        <Grid item xs={2} md={3} ><ListItemIcon>
                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemIcon></Grid>
                        <Grid item xs={6} md={9} >
                            <ListItem button key="RemySharp">
                                <ListItemText primary="John Wick"></ListItemText>
                                <ListItemText align="right" secondary="09:30"></ListItemText>
                            </ListItem>
                            <ListItemText className ="message">{message}</ListItemText>
                        </Grid>
                    </Grid>
                </List>
                <List className="message-block2">
                    <Grid container>
                        <Grid item xs={2} md={3} ><ListItemIcon>
                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemIcon></Grid>
                        <Grid item xs={6} md={9} >
                            <ListItem button key="RemySharp">
                                <ListItemText primary="John Wick"></ListItemText>
                                <ListItemText align="right" secondary="09:30"></ListItemText>
                            </ListItem>
                            <ListItemText className ="message">{message}</ListItemText>
                        </Grid>
                    </Grid>
                </List>
                <List className="message-block spacing">
                    <Grid container>
                        <Grid item xs={2} md={3} ><ListItemIcon>
                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemIcon></Grid>
                        <Grid item xs={6} md={9} >
                            <ListItem button key="RemySharp">
                                <ListItemText primary="John Wick"></ListItemText>
                                <ListItemText align="right" secondary="09:30"></ListItemText>
                            </ListItem>
                            <ListItemText className ="message">{message}</ListItemText>
                        </Grid>
                    </Grid>
                </List>

            </Grid>


        )
    }
}

export default Conversation;