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
              {/* <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <rect width="31" height="32" fill="url(#pattern0)" />
                <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#image0" transform="translate(-0.016129) scale(0.0215054 0.0208333)" />
                  </pattern>
                  <image id="image0" width="48" height="48" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAADDElEQVRYw+2WzyusYRTHP6SkBvlR8qt07yRko25NzUITO8VGsbTVO2o2FnYWirJiQZr9bFwLhRJ/hBolWZJBpAyFhuYu7nmO98e87wzu7XbLeTfz/T5nzvf5cc5zHviy/8HKiDDDBmky5MmTIc0GM0Qo+3zwVhY4I+/znbFA68eD17PCk29w8z2xQv1Hwo9xUzS4+W4Ye1/wClYdAZ7ZI06MMCFChIkRZ49nh88qFaWGr2LL9sdL4lQX9KsmzqXNc4uq0ma/bdvfWUKB3iFmbee0XcoqVm1zj5a04qhtHavFnMfV9ZB2G9+GxRYn3HPPCVtYtNlG2znU/40HhW/gWmf/Fr6ZJDlP5uRI0myTMKu4psFfYEX3/m1zhsn6pmeWYdtGmbNY8a9a4zKr3BSvgRXwypT6zur0fKp7XhwuNHOGbeEPSdBNiBDdJGx7/qqrCHEh3Hyh8OWcyrAlTAt3WmgW5S5vSwvtjhZhLWFOXd4ARDRYrTBJZQYKrnhAJZLC1CoT8brPyNCuJqbJnLhvUsQ1o0zS7goz43XecIWzdO/LNQlSZMiQ0kMs17OwXJIbXgHjGhO8Izih4W9st6eRSAizIzim0/KYKbFOwceCewSnHOmZErZH8LHgTi03j5kaMDdn1oXPHQLneqOaknPip+ICJkVrBN86BG6FrdFULSpgtqhL8JHgXsHrDoGfwvYKPhLc5b9FaRkaFGy6wrTgb45D/i7stHaC3zYoOO0VWHel6aTOzTSRDhXo0OZk1jnpStN1/0LbF9zEi2sNqACu+b/QJMy+f6H90Ko09/maMiMFBUa01te0nxjmR9BlZy7gRsmcrHYHp0BUUvmWRr3cAy47mJPhK03NIXK28N4tipIlx5Cm7JWMz/k1nEdxWFRuwtH43QIQZUJ/L8roo/9zcrlAyyRQgAItc9m/J9fZWnf4XQJh23OhLuhdMapBDt4lcKBjo8VeRkvkyfNA/7sE+nkgT54liloFmz7hg8+gnwc2S3sAV9LnMxIkAH1U8kkLFvgD9iXw7wW+7G/YL72xiFnkJDymAAAAAElFTkSuQmCC" />
                </defs>
              </svg> */}
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
