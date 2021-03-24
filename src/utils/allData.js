import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Project1 from '../assets/project-1.jpg';
import Project2 from '../assets/project-2.jpg';
import Project2b from '../assets/project-2b.jpg';
import Project3 from '../assets/project-3.jpg';
import Project4 from '../assets/project-4.jpg';
import Project5 from '../assets/project-5.jpg';
import Project7 from '../assets/project-7.jpg';
import Project8 from '../assets/project-8.jpg';
import Project9 from '../assets/project-9.jpg';

//here you can modify all data information

 const allData = {
    socials: {
        facebook: {
            link:"https://www.facebook.com/",
            text:"Facebook",
            icon:<FacebookIcon/>
        },
       twitter: {
            link:"https://www.twitter.com/",
            text:"Twitter",
            icon:<TwitterIcon/>
        },
        linkedin: {
            link:"https://www.twitter.com/",
            text:"Linkedin",
            icon:<LinkedInIcon/>
        },
    },
    experience: [
        {
            title:'Web Designer - Unchrony',
            date:'2018-Present',
            description:'Vivamus rhoncus magna vitae lectus tincidunt viverra. Sed nisl turpis, iaculis suscipit lacus eget. '
        },
        {
            title:'work',
            date:'2016-2018',
            description:'Vivamus rhoncus magna vitae lectus tincidunt viverra. Sed nisl turpis, iaculis suscipit lacus eget. '
        },
        {
            title:'work',
            date:'2018-Present',
            description:'Vivamus rhoncus magna vitae lectus tincidunt viverra. Sed nisl turpis, iaculis suscipit lacus eget. '
        }

    ],

    education: [
        {
            title:'edu 1',
            date:'2009-2012',
            description:'Vivamus rhoncus magna vitae lectus tincidunt viverra. Sed nisl turpis, iaculis suscipit lacus eget. '
        },
        {
            title:'edu 2',
            date:'2016-2018',
            description:'Vivamus rhoncus magna vitae lectus tincidunt viverra. Sed nisl turpis, iaculis suscipit lacus eget. '
        },
        {
            title:'edu 3',
            date:'2018-Present',
            description:'Vivamus rhoncus magna vitae lectus tincidunt viverra. Sed nisl turpis, iaculis suscipit lacus eget. '
        }

    ],

    portfolio: [
        {
            tag:'UI Design',
            image:Project1,
            title: 'Bootstrap 4 Eco Landing Page',
            description: 'Website template developed for Codester',
            icon: VisibilityIcon,
            link:"http://www.codester.com/index.php?url=items/preview/26381/4green-eco-friendly-bootstrap-4-landing-page"
        },
        {
            tag:'React',
            image:Project5,
            title: 'Responsive React One Page',
            description: 'Multipurpose Template in ReactJs and Styled Components',
            icon: VisibilityIcon,
            link:"https://alphcons.netlify.app"
        },
        
        {
            tag:'UI Design',
            image:Project2b,
            title: 'Room Products Landing Page',
            description: 'Layout developed for Frontend Mentor',
            icon: VisibilityIcon,
            link:"https://room-products-homepage.netlify.app"
        },
        {
            tag:'React',
            image:Project2,
            title: 'React Real Estate Landing Page',
            description: 'Homepage design, work in progress',
            icon: VisibilityIcon,
            link:"https://homereve-basic-landing.netlify.app"
        },
        {
            tag:'UI Design',
            image:Project3,
            title: 'Chat App CSS Illustration',
            description: 'Developed for Frontend Mentor',
            icon: VisibilityIcon,
            link:"https://monicalaura.github.io/chat_app_css"
        },
        {
            tag:'UI Design',
            image:Project9,
            title: 'Store landing page template',
            description: ' Mobile-first, Bootstrap4, Javascript, JQuery',
            icon: VisibilityIcon,
            link:"https://monicalaura.github.io/chocoways"
        },
        {
            tag:'React',
            image:Project7,
            title: 'Here Recipe app',
            description: 'Recipes finder application built in React.js, with Hooks',
            icon: VisibilityIcon,
            link:"https://monicalaura.github.io/chocoways"
        },
        {
            tag:'React',
            image:Project4,
            title: 'React Travel Agency Landing Page',
            description: 'Web design project, work in progress',
            icon: VisibilityIcon,
            link:"https://all4trips.netlify.app"
        },
        {
            tag:'UI Design',
            image:Project8,
            title: 'Cars landing page template',
            description: 'Mobile-first, Bootstrap4, JavaScript and JQuery',
            icon: VisibilityIcon,
            link:"https://monicalaura.github.io/here-recipe"
        },
        
    ]
}

export default allData