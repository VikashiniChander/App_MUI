import LeftSidePanel from './component/LeftSidePanel/LeftSidePanel'
import Conversation from './component/Conversation/Conversation';
import User from './component/User/User';

import Chat from './component/Chat/Chat';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh'
  },
  headBG: {
      backgroundColor: '#e0e0e0'
  },
  borderRight500: {
      borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto'
  }
});
// const App = () => {
//   const classes = useStyles();

function App() {
  return (
   
        <div className="App">
        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message">Chat</Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} className="chatSection">
          <LeftSidePanel />
          <Conversation />
           <Chat />
           <User />
           
        </Grid>
      </div>
  );
  }

 


export default App;
