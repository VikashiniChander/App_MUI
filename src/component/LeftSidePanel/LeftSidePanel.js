import './LeftSidePanel.scss';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import SettingsInputAntennaOutlinedIcon from '@material-ui/icons/SettingsInputAntennaOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
// import PodcastsOutlinedIcon from '@material-ui/icons/PodcastsOutlined';
// import InsightsIcon from '@material-ui/icons/Insights';
import Podcast from '../Common/Podcast/Podcast';
import PanelIcon from '../Common/PanelIcon/PanelIcon';
import ImageIcon from '../Common/ImageIcon/ImageIcon';

function LeftSidePanel() {

  return (
    <Grid item xs={1} className="panel-container" direction="row" >
     {/* <Podcast />
     <ImageIcon /> */}
     <PanelIcon />
      <SentimentSatisfiedOutlinedIcon  className="panel-icon smile-icon"></SentimentSatisfiedOutlinedIcon>
      <SentimentSatisfiedOutlinedIcon  className="panel-icon smile-icon"></SentimentSatisfiedOutlinedIcon>

    </Grid>
  );
}



export default LeftSidePanel;
