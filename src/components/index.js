//here all the components are rendered

import React from 'react';
import Particles from 'react-particles-js';
import { makeStyles } from "@material-ui/core/styles";
import Navbar from './Navbar';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';



//particles styles
const useStyles = makeStyles((theme) =>({
  particlesContainer:{
    height:'auto',
    opacity:0.2,
  }

}));


const HomePage = () => {

  //Material UI styles
  const classes = useStyles();

    return (
        <>
          <Navbar /> 
          <Header />

          {/* particles animation */}
          {<Particles
          canvasClassName={classes.particlesContainer}
         params={{
           particles:{
             number:{
               value:45,
               density:{
                 enable: true,
                 value_area:900
               }
             },
            shape:{
              type:"circle",
              stroke:{
                width:1,
                color:'#5DB5FD'
              }
            },
            size:{
              value:7,
              random:true,
              anim:{
                enable:true,
                speed:7,
                size_min:0.1,
                sync:true
              }
            },
            opacity:{
              value:1,
              random:true,
              anim:{
                enable:true,
                speed:1,
                opacity_min:0.1,
                sync:true
              }
            } 
           }
         }}>
         
        </Particles>}

        <Portfolio />
        <About />
        <Contact />
        <Footer />
    
        </>
    )
}

export default HomePage
