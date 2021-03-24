import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import allData from '../utils/allData';
import ResumeTimeline from '../components/ResumeTimeline'

//profile timeline styles
const useStyles = makeStyles((theme) => ({
   
    infoContainer:{
        marginTop:'-3rem'
    }
    
         
    }));

    

const ProfileInfo = () => {

    //Material UI styles
    const classes = useStyles();

    return (      
        <Box component = "div" className={classes.infoContainer}>
          <ResumeTimeline icon={<PermIdentityIcon/>} /> 
        </Box>           
        
    )
}

export default ProfileInfo
