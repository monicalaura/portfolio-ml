import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { Typography} from '@material-ui/core';

//timeline styles
const useStyles = makeStyles((theme) => ({

    //resume section
    aboutSection:{
        display:'flex',
        flexDirection: 'row',
        margin:'6rem 0 6rem 0',
        padding:'3rem 0 3rem 0',
        background: 'linear-gradient(90deg, rgba(37,42,45,0.3) 0%, rgba(37,42,45,0.9) 35%, rgba(37,42,45,1) 100%)',
        [theme.breakpoints.down('md')]: {
           width:'100%', 
            flexDirection:'column',
            margin:'3rem 0 3rem 0',   
          }
    },
    
    aboutContainer:{
      [theme.breakpoints.down('md')]: { 
      display:'flex',
      flexDirection:'column',
      
      alignItems:'center',
      justifyContent:'center',
      padding:'0 4rem 0 0'
      }
      
    },
    
    aboutTitle:{
      textAlign:'center',
      color: '#5DB5FD',
      marginTop: '1rem',
      marginBottom:'2rem',
      textTransform:'uppercase',
      [theme.breakpoints.down('sm')]: { 
       fontSize:'1.4rem',
       marginTop:'-1rem'
  
      }
    },

    aboutText:{
        fontSize:'1.2rem',
        color:'#ffffff',
    }
  
  
   
}));

const About = () => {

//Material UI styles
const classes = useStyles();
    return (

          <Grid container className={classes.aboutSection} id="about">
            <Container maxWidth="lg" className ={classes.aboutContainer}>
                <Typography variant="h4" className={classes.aboutTitle}>About Me</Typography> 
                <Typography variant="p" className={classes.aboutText}>
                Since 2015, I've had the opportunity to work as a web designer, webmaster and content manager for clients such as <em>Decathlon, Carrefour, Di, IMA Europe, Renmans, Intermarché, Fondation St-Luc, Rob, Planet Parfum, L’Esplanade, Fondation Charcot,</em> etc.
<br></br>I am both a visual and a technical person. I understand the user interface design solution both in its practical intention and creative vision, and convert it into front-end pages.
Ultimately, just like almost any other human trying to think in binary, I acknowledge my never-ending love/hate relationship with 
the codes jungle.  
                </Typography>   
           </Container>
           </Grid>
    )
}

export default About
