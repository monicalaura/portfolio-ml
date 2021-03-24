
//Navbar menu
import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Link as LinkScroll} from 'react-scroll';
import { AppBar, Avatar, Box, Divider, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core'
import { Apps, AssignmentInd, ContactMail, Home } from '@material-ui/icons';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import avatar from '../assets/me.jpg'

    
//navbar styles
const useStyles = makeStyles((theme) => ({
 
  //app bar container
  appbarContainer:{
    height:'100%'
  },
  //app bar
  navMenu: {
    backgroundColor:'#252A2D',
    border:'none',
    position: 'fixed !important;', 
    zIndex: theme.zIndex.drawer + 1,
      
  },

  //logo
  logo:{
      width:'12rem',
      marginLeft:'2rem',
      fontSize:'1.2rem',
      color:'#ffffff;',
      [theme.breakpoints.down('sm')]: {
        display:'none'
      },
  },
//navigation container
  menuContainer:{
      width:250,
      height:'29rem',
      background:'#219afd',
      padding:'4rem 0 0 0', 
      [theme.breakpoints.down('sm')]: {
        width:'100%',
        height:'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:'1.5rem'       
      }     
   },     

  avatar:{
      margin:"0 auto",
      marginBottom:'2rem',
      display:'block',
      width:'7rem',
      height:'7rem'    
    },

menuLinks:{
        textDecoration:'none',
        
  },

  navText:{
      color:'#f0eefa',
      textDecoration: 'none' 
  },
  navIcon:{
      color:'#252A2D'
  },

 //container of portfolio title and arrow 
  portfolioWrap:{
      display:'flex',
  },

//right arrow top open side menu
arrowRight: {
  color:'#33A1FD',
  margin:'0 2rem 0 0 ',
  [theme.breakpoints.down('sm')]: {
    fontSize:'1.1rem',
    marginRight:'.1rem',
    marginTop:'.2rem'
  }
},

  portfolioTitle:{
    marginLeft:'auto',
    color:'#f0eefa',
    fontSize:'1.4rem',
    [theme.breakpoints.down('sm')]: {
      fontSize:'1.2rem',
    },
  }
}));

//MENU icons and links
const navItems = [
   {
    navIcon: <Home/>,
    navText: 'Home',
    link:"/"
   },
   {
    navIcon: <Apps/>,
    navText: 'Projects',
    link:"portfolio"
   },
   {
    navIcon: <AccountBoxIcon />,
    navText: 'About',
    link:"about"
   },
   
   {
    navIcon: <ContactMail/>,
    navText: 'Contact',
    link:"contact"
   }
]

const Navbar = () => {

    //states: toggle side menu 
    const [menuOpen, setMenuOpen] = React.useState(false);

    //function that toggles open/close menu
    function handleDrawerToggle() {
        setMenuOpen(!menuOpen)
      }

      //Material UI styles
    const classes = useStyles();


    return (  
        <> 
        <Box component="nav">
            <AppBar position="fixed" className ={classes.navMenu}>
                <Toolbar className="portfolioWrap">                   
               {/*  <img src={Logo} alt="logo" className={classes.logo}></img> */}
               <Typography variant="h6" className={classes.logo} onClick={handleDrawerToggle}>
                        Monica Laura 
                    </Typography>
                    <Typography variant="h5" className={classes.portfolioTitle} onClick={handleDrawerToggle}>
                        Portfolio
                    </Typography>
                    <IconButton  onClick={handleDrawerToggle} >
                    <DoubleArrowIcon className={classes.arrowRight}></DoubleArrowIcon>
                    </IconButton>                   
                    
                </Toolbar>
            </AppBar>           
        </Box>
        
        <Box component="div" className ={classes.menuWrapper} >
            
            <Divider/>

            <Drawer
            variant="persistent"
            anchor="right"
            open={menuOpen}
            onClose={handleDrawerToggle}
            onClick={handleDrawerToggle}
            classes={{ paper: classes.menuContainer }}
            >
                <Avatar src={avatar} alt="avatar" className ={classes.avatar} />
                   

            <List className={classes.navItems}>
                {navItems.map((item, key) => {

                   return (
                    <LinkScroll 
                    to = {item.link}
                    key={item.navText}
                    smooth={true}
                    spy={true}
                    duration={700}>
                   <ListItem button onClick={handleDrawerToggle}>
                   <ListItemIcon 
                    className={classes.navIcon}>
                        {item.navIcon}
                    </ListItemIcon>
                    <ListItemText primary={item.navText} className={classes.navText} />                                       
                    </ListItem>
                  </LinkScroll>                   
                    )
                })}
                              
            </List>                  
        </Drawer>       
        </Box> 
       </>           
      
    )
}

export default Navbar

