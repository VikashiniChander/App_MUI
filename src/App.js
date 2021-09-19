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

function App() {
  return (
   
        <div className="App">
            <Grid item xs={12} class="inbox">``
                <Typography variant="h5" className="header-message">Inbox</Typography>
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
