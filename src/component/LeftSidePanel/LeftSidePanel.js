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
import InboxIcon from '../Common/InboxIcon/InboxIcon';
import ConstructionIcon from '../Common/ConstructionIcon/ConstructionIcon';
import GroupIcon from '../Common/GroupIcon/GroupIcon';
import TextIcon from '../Common/TextIcon/TextIcon';


function LeftSidePanel() {

  return (
    <Grid item xs={1} className="panel-container" direction="row" container>
      <Grid direction="row" xs={10}>
      <InboxIcon />
      
      <Podcast />
      <TextIcon />
      <GroupIcon />
      <PanelIcon />

      <ConstructionIcon />
      </Grid>
      <SentimentSatisfiedOutlinedIcon className="panel-icon grey-color"></SentimentSatisfiedOutlinedIcon>
      <SentimentSatisfiedOutlinedIcon className="panel-icon smile-icon grey-color"></SentimentSatisfiedOutlinedIcon>

    </Grid>
  );
}



export default LeftSidePanel;
