import React, { useState } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Tabs, Tab, Typography, Card, CardActionArea, CardMedia, CardContent, Grow } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import allData from '../utils/allData';



//timeline styles
const useStyles = makeStyles((theme) => ({
   
    //resume section
    portSection:{
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
  
  portContainer:{
    [theme.breakpoints.down('md')]: { 
    display:'flex',
    flexDirection:'column',
    
    alignItems:'center',
    justifyContent:'center',
    padding:'0 4rem 0 0'
    }
    
  },
  
  portTitle:{
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


  tabsContainer: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'nowrap',
    color:"theme.palette.primary.light",
    marginTop:'1rem'

  },

  projContainer:{
    marginTop:"2rem",
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.down('sm')]: { 
      marginLeft:'1rem'
    }

  },

  customCard:{
   height:"320px",
   borderRadius: '5px',
  /*  width:'375px', */
   /* border:'4px solid #000000', */
   [theme.breakpoints.down('xs')]: { 
   /* width:'270px !important', */
   
   },
  
   [theme.breakpoints.down('sm')]: { 
    height:"380px !important",
    /* width:'300px !important' */ 
  },

  [theme.breakpoints.down('md')]: { 
    /* width:'600px', */
    height:"340px !important"

    }

  },

  customImage:{
  
    height:"200px",
    boxShadow: '0 0 48px 0 rgba(4,6,4,0.08) !important',
    overflow: 'hidden',
    outlineWidth:'0px !important',   

  },

  projTitle: {
    marginBottom: '0.6rem',
    fontWeight:'600',
    [theme.breakpoints.down('sm')]: { 
     lineHeight:'1' 
    }
  },


       
}));
  

const Portfolio = () => {

  const [tabValue, setTabValue] = useState('All')

    //Material UI styles
    const classes = useStyles();

    return (
        <Grid container className={classes.portSection} id="portfolio">
            <Container maxWidth="lg" className ={classes.portContainer}>
                <Typography variant="h4" className={classes.portTitle}>Recent Projects</Typography>  
                               
                <Tabs 
                   value={tabValue}
                   indicatorColor="theme.palette.secondary.main"
                   className={classes.tabsContainer}
                   onChange={(event, newValue) => setTabValue(newValue)}>
                  
                  <Tab label="All" value="All" className = {tabValue === "All" ? 'tabItem active' : 'tabItem'} />
       
       {/* !JS sets= array with unique elem - not to repeat the same values throughout map */}
                 {/*  {[...new Set(allData.portfolio.map(item => item.tag))].map(title => (
                   
                    <Tab label={title} 
                         value={title} 
                         className = {tabValue === "All" ? 'tabItem active' : 'tabItem'} />
                  ))} */}

                 <Tab label="UI Design" 
                         value="UI Design" 
                         className = {tabValue === "All" ? 'tabItem active' : 'tabItem'} />
                  <Tab label="React" 
                         value="React" 
                         className = {tabValue === "All" ? 'tabItem active' : 'tabItem'} />   
                </Tabs>

               {/*  PROJECTS  */}
                <Grid item xs={12}> 
                  <Grid container spacing={3} className={classes.projContainer}>
                    {allData.portfolio.map(item =>(
                      <>
                      {tabValue === item.tag || tabValue === "All" ? (
                        <Grid item lg={4} md={6} sm={12} xs={12} >
                        <Grow in timeout={1000}>
                        <Card className={classes.customCard} id="projCard">
                          <CardActionArea>
                            <a href={item.link} target="_blank" alt="item.title">
                            <CardMedia className={classes.customImage} id="projImg" image={item.image} title={item.title}>
                            <div className="overlay">
                            <Typography variant="p" className="projText">{item.description}</Typography>
                            <br/><VisibilityIcon className="projIcon" />
                            </div>
                            </CardMedia>
                            </a>
                            <CardContent >
                              <Typography variant="h6" className={classes.projTitle}>{item.title}</Typography>
                      
                            </CardContent>
                            
                          </CardActionArea>
                        </Card>
                        </Grow>
                      </Grid>
                      ) : null}
                      
                      </>
                    ))}
                  </Grid>
                </Grid>

            </Container>        
            
        </Grid>
    )
}

export default Portfolio
