import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

//timeline styles
const useStyles = makeStyles((theme) => ({

    //resume section
    contactSection:{
        display:'flex',
        flexDirection: 'row',
        margin:'6rem 0 6rem 0',
        padding:'3rem 0 3rem 0',
        background: 'transparent',
        [theme.breakpoints.down('md')]: {
           width:'100%', 
            flexDirection:'column',
            margin:'3rem 0 3rem 0',   
          }
    },
    
   
    

    aboutText:{
        fontSize:'1.2rem',
        color:'#ffffff',
    }
  
  
   
}));

const Contact = () => {

return (

<section className="contactSection" id="contact">
<h4 className="contactTitle">Get in Touch</h4> 
<div className="contactWrapper">
<div className="col social">
<h3>Find me online...</h3>
				
				<div class="social-icon">
							<ul class="list-inline">
								
							<li><a href="https://www.linkedin.com/in/monicalauraburns" target= "_blank" rel="noreferrer">{<LinkedInIcon className="cIcon"/>}</a></li>
							<li><a href="https://twitter.com/MonicaL31230959" target= "_blank" rel="noreferrer">{<TwitterIcon className="cIcon"/>}</a></li>
							<li><a href="https://github.com/monicalaura" target="_blank" rel="noreferrer">{<GitHubIcon className="cIcon" />}</a></li>	
								
				
							</ul>
						</div>
</div>
<div className="col contactForm">
<form  action="https://formspree.io/f/mnqoezop" method="POST"className="contactContainer">
    <input className="inputContact" type="text" name="username" placeholder="Name"required="required"></input>
    <input className="inputContact" type="email" name="_replyto"  placeholder="Email" required="required"></input>
    <textarea className="textareaContact" type="text" name="message" placeholder="Message" required="required">
    </textarea>
        <button className="contactButton">Send</button>
        </form>
</div>
</div>
</section>


)
   
}

export default Contact
