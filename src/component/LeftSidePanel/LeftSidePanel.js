import './LeftSidePanel.scss';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import SettingsInputAntennaOutlinedIcon from '@material-ui/icons/SettingsInputAntennaOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import PodcastsOutlinedIcon from '@material-ui/icons/PodcastsOutlined';
// import InsightsIcon from '@material-ui/icons/Insights';
// import Podcast from 'App_MUI/src/component/Common/Podcast/Podcast';
function LeftSidePanel() {

  return (
    <Grid item xs={1} className="panel-container" direction="row" >
      <InsertPhotoOutlinedIcon className="panel-icon"></InsertPhotoOutlinedIcon>
      <PodcastsOutlinedIcon className="panel-icon"></PodcastsOutlinedIcon>
      <SettingsInputAntennaOutlinedIcon className="panel-icon"></SettingsInputAntennaOutlinedIcon>
      <DescriptionOutlinedIcon className="panel-icon"></DescriptionOutlinedIcon>
      <SentimentSatisfiedOutlinedIcon  className="panel-icon"></SentimentSatisfiedOutlinedIcon>
      {/* <InsightsIcon></InsightsIcon> */}
    </Grid>
  );
}





export default LeftSidePanel;
