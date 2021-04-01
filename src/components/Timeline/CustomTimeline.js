import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// nodejs library to set properties for components
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline(props) {
  const classes = useStyles();
  const { section, section_datas } = props;
  return (
    <Timeline align="right">
      {section_datas.map((data, index) => {
        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {data.time}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={index === 0 ? "secondary" : "grey"}>
                {section === "education" ? (
                  <CollectionsBookmarkIcon />
                ) : (
                  <LaptopMacIcon />
                )}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  {data.title}
                </Typography>
                <Typography>{data.description}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}

CustomizedTimeline.propTypes = {
  section_datas: PropTypes.array,
  section: PropTypes.string,
};
