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
      
    <Grid  item xs={1}>
 
    <Box  spacing={2}  className="user-block">
        <Grid item sx={{ml:3}}>

        <Avatar>W</Avatar>
        </Grid>

      <Paper className="rectangle">
        <Grid  wrap="nowrap" spacing={2}>
          <Grid>
            <Typography mt={2}>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ maxWidth: 600, my: 1, mx: 'auto', p: 2 , pt: 2,  width: 230, height: 200, }} >
        <Grid  wrap="nowrap" spacing={2} >
        <Grid>
          </Grid>
          <Grid>
            <Typography mt={2}>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      
          
     
    </Box>
     </Grid>
  );
  }


 


export default User;
