import './LeftSidePanel.scss';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import SettingsInputAntennaOutlinedIcon from '@material-ui/icons/SettingsInputAntennaOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

function LeftSidePanel() {

  return (
    <Grid item xs={1} className="panel-container">
      <InsertPhotoOutlinedIcon className="panel-icon"></InsertPhotoOutlinedIcon>
      <SettingsInputAntennaOutlinedIcon className="panel-icon"></SettingsInputAntennaOutlinedIcon>
      <DescriptionOutlinedIcon className="panel-icon"></DescriptionOutlinedIcon>
      <SentimentSatisfiedOutlinedIcon  className="panel-icon"></SentimentSatisfiedOutlinedIcon>

    </Grid>
  );
}





export default LeftSidePanel;
