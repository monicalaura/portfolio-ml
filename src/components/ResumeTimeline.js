import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import allData from '../utils/allData'


//timeline styles
const useStyles = makeStyles((theme) => ({
   
  //resume section
  resumeSection:{
    display:'flex',
    flexDirection: 'row',
    margin:'6rem 0 6rem 0',
    padding:'3rem 0 3rem 0',
    background: 'linear-gradient(90deg, rgba(37,42,45,0.3) 0%, rgba(37,42,45,1) 35%, rgba(37,42,45,1) 100%)',
    [theme.breakpoints.down('md')]: {
       width:'100%', 
        flexDirection:'column',
        margin:'3rem 0 3rem 0',   
      }
},

resumeContainer:{
  margin:'4rem 0 4rem 0',
  [theme.breakpoints.down('md')]: { 
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  padding:'0 4rem 0 0'
  }
  
},

resumeTitle:{
  textAlign:'center',
  color: theme.palette.secondary.main,
  marginBottom:'2rem',
  textTransform:'uppercase'
},

workTitle:{
  textAlign:'center',
  color: theme.palette.primary.light,
  marginBottom:'2rem'

},

//timeline component
    timeline:{
        padding:0,                       
    },

    //timeline title
    timelineHeader:{
        paddingTop:'0.2rem',
        color: theme.palette.primary.light
    },

    //the main icon circle
    dotHeader:{
        background:theme.palette.secondary.main,
        padding:'0.5rem'
    },
    
    //work icon
    jobIcon:{
        width:15,
        height:15
    },

    jobTitle:{
      color:theme.palette.secondary.main,
      fontWeight:'600'
   },

   jobDescription:{
    color:theme.palette.primary.light
    
   },

    //small dot
    dot:{
        background: theme.palette.secondary.main
    },
       
    }));

const ResumeTimeline = ({title, icon, children}) => {

    //Material UI styles
    const classes = useStyles();

    return (
  <Box variant="div" className={classes.resumeSection} id="resume">
    <Container maxWidth="lg">
    <Typography variant="h4" className={classes.resumeTitle}>Resume</Typography>
   
     <Grid container spacing={3} className ={classes.resumeContainer}>
 
      {/* Work History */}
    <Grid item className="workTitle" lg={6} md={12} sm={12}>
    <Typography variant="h5" className={classes.workTitle}>Work History</Typography>
     <Timeline className={classes.timeline} id="timeline">
    
      <TimelineItem className={classes.firstItem}>
        <TimelineSeparator className={classes.separator}>
          <TimelineDot className={classes.dotHeader}>
              <WorkIcon />
          </TimelineDot>    
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant="h5" className={classes.timelineHeader}>
                {title} 
            </Typography>
        </TimelineContent>
      </TimelineItem>

      {allData.experience.map(job => (

      <TimelineItem>
      <TimelineSeparator>
        <TimelineDot className={classes.dot} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h6" className={classes.jobTitle}>{job.title}</Typography>
        <Typography variant="p" className={classes.jobDescription}>{job.description}</Typography>
      </TimelineContent>
    </TimelineItem>

))}
    
    </Timeline>
    </Grid>   {/* End of Work History */}

    {/* Education History */}
    <Grid item className="eduTitle" lg={6} md={12} sm={12}>
    <Typography variant="h5" className={classes.workTitle}>Education History</Typography>
     <Timeline className={classes.timeline} id="timeline">

    {/*  timeline first item, with a different style */}
      <TimelineItem className={classes.firstItem}>
        <TimelineSeparator className={classes.separator}>
          <TimelineDot className={classes.dotHeader}>
              <CastForEducationIcon />
          </TimelineDot>    
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant="h5" className={classes.timelineHeader}>
                {title} 
            </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* timeline item */}
  {allData.education.map(edu => (

    <TimelineItem>
    <TimelineSeparator>
      <TimelineDot className={classes.dot} />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6" className={classes.jobTitle}>{edu.title}</Typography>
      <Typography variant="p" className={classes.jobDescription}>{edu.description}</Typography>
    </TimelineContent>
    </TimelineItem>

))}

    </Timeline>
    </Grid>  {/* End of Work History */}

    </Grid> 
    </Container> 
    </Box>
                 
    )
}

export default ResumeTimeline
