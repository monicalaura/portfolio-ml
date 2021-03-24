import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Typed from 'react-typed';
import {
    Typography,
    Avatar,
    Box
} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import avatar from '../assets/me.jpg';
import ResumeButton from './ResumeButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import CakeIcon from '@material-ui/icons/Cake';
import Grid from '@material-ui/core/Grid';
import { AssignmentInd } from '@material-ui/icons';



//header styles
const useStyles = makeStyles((theme) => ({

  //header container
  headerContainer:{
      position:'absolute',
      top:'50%',
      left:'50%',
      webkitTransform: 'translate(-50%, -50%)',
      transform:'translate(-50%, -50%)',
      textAlign:'center',
      padding: '2rem 0 0.5rem 0',
      zIndex: 1,
      [theme.breakpoints.down('md')]: {
        padding:'2rem 1rem 2rem 1rem',
        top:'25%'       
      },
      [theme.breakpoints.down('xs')]: {
        padding:'2rem 1rem 1rem 1rem',
        top:'40%'      
      }
  },

 //avatar
 avatar:{
     width:'8rem',
     height:'8rem',
     margin:'0 auto'
 },
 //name
 title:{
     color:'#5DB5FD',
     marginTop:'1rem',
     [theme.breakpoints.down('sm')]: {
        fontSize:'1.5rem'
      }
 },

 //position
 position:{
    color:'#d0cde1',
    marginBottom:'3rem',
    [theme.breakpoints.down('sm')]: {
        fontSize:'1.3rem',
        marginBottom:'.7rem'
      }
 },

 info:{
    marginTop:'4rem',
    [theme.breakpoints.down('md')]: {
        marginTop:0      
      },
    [theme.breakpoints.down('sm')]: {
        marginTop:'2rem'
      }
     
 },

 //candidate information icon
 infoIcon:{
    color:theme.palette.secondary.main
},

  //candidate information text
   textIcon:{
    color:theme.palette.primary.light,
    fontWeight:'400'

 }  
            
  }));

const Header = () => {

    //Material UI styles
    const classes = useStyles();

    return (
        <Box className ={classes.headerContainer} id="header">
            <Avatar src={avatar} alt="avatar" className={classes.avatar}></Avatar>

            {/* candidate name */}
            <Typography variant="h4" className={classes.title}>
            <Typed
                    strings={['Monica Laura']}
                    typeSpeed={40}
                /> <br></br>          
            </Typography>

            {/* candidate position */}
            <Typography variant="h5" className={classes.position}>
            <Typed
                    strings={['Web Designer', 'Content Manager']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                /> <br></br>          
            </Typography>
            <Grid item sm={12} className={classes.info}>
           <List>
                {/* email */}
            <ListItem>
                <ListItemIcon 
                        className={classes.infoIcon}>
                        <EmailIcon />  
                </ListItemIcon>
                <ListItemText className={classes.textIcon}>monicalauraburns@yahoo.com</ListItemText> 
            </ListItem>
            {/* phone */}
            <ListItem>
                <ListItemIcon 
                        className={classes.infoIcon}>
                        <PhoneIcon />  
                </ListItemIcon>
                <ListItemText className={classes.textIcon}>0040-730-048-243</ListItemText> 
            </ListItem> 
           
                                   
            </List>
           </Grid> 
           <a href="https://monicalauraburns-resume.netlify.app" className="resumeLink" target="_blank"><ResumeButton icon={<AssignmentInd />}  text={"My Resume"} >
           </ResumeButton> </a>
                     
        </Box>
    )
}

export default Header
