import './User.scss';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MuiCollapse from '@material-ui/core/Collapse';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { spacing } from '@material-ui/system';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
import { Icon } from "@material-ui/core";
import ComposeIconBlack from '../Common/ComposeIconBlack/ComposeIconBlack';

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1), //grid padding
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: 20,
  },
}));

function User() {
  //create class based upon class outside of export default. 
  const classes = useStyles();

  return (

    <Grid item xs={2}>

      <Box spacing={2} className="user-block">
        <Box className="composeIcon">
          <ComposeIconBlack />
        </Box>


        {/* <Grid item conatiner >
        <Grid  className="userIcon"> <Avatar></Avatar></Grid>

     
        
        <Paper className="rectangle">
          <Grid wrap="nowrap" container>
            <Grid>
              <MailOutlineSharpIcon></MailOutlineSharpIcon>
            </Grid>
            <Grid>
              <Box className="rectangle-text">linda@jackson.com</Box>
            </Grid>
          </Grid>
          <Grid wrap="nowrap" container>
            <Grid>
              <PhoneOutlinedIcon></PhoneOutlinedIcon>
            </Grid>
            <Grid>
              <Box className="rectangle-text">+1-415-404-0924</Box>
            </Grid>
          </Grid>

        </Paper>
        </Grid> */}

        <Paper className="rectangle">
          <Grid wrap="nowrap" spacing={0} container>
            <Grid xs={1}>

            </Grid>
            <Grid className="message-spacing" >

              <Box className="rectangle-text">123 Main St</Box>
              <Box className="rectangle-text italic-text">Contact Owner</Box>
              <Box className="rectangle-text">Adam Horsman</Box>
              <Box className="rectangle-text italic-text">Favourite Color</Box>
              <Box className="rectangle-text">Green</Box>

            </Grid>
            <SettingsOutlinedIcon className="gearIcon"></SettingsOutlinedIcon>
            <KeyboardArrowDownIcon className="arrowIcon"></KeyboardArrowDownIcon>
          </Grid>
        </Paper>
        <Paper className="rectangle">
          <Grid wrap="nowrap" spacing={0} container>
            <Grid xs={1}>
              <img src="App_MUI\src\assets\address1.png" />
            </Grid>
            <Grid className="message-spacing" >

              <Box className="rectangle-text">123 Main St</Box>
              <Box className="rectangle-text italic-text">Contact Owner</Box>
              <Box className="rectangle-text">Adam Horsman</Box>
              <Box className="rectangle-text italic-text">Favourite Color</Box>
              <Box className="rectangle-text">Green</Box>

            </Grid>
          </Grid>
        </Paper>



      </Box>
    </Grid>
  );
}





export default User;
