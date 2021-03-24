import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core"

//button styles
const useStyles = makeStyles((theme) => ({
   
 // button icon  
   resumeBtn:{   
    color: theme.palette.primary.light,
    fontSize:'1.2rem',
    fontWeight: '300',
    textTransform:'capitalize',
    border:0,
    borderRadius: 50,
    marginTop:'4rem',
    padding:'0.2rem 1.2rem',
    lineHeight:'2.5rem',
    minWidth:170,
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '1.1rem',
        lineHeight:'2rem',
        padding:'0.2rem 1rem',
        marginTop:'1rem'
        
      }
   },
         
    }));

const ResumeButton = ({text, icon}) => {
    //Material UI styles
    const classes = useStyles();

    return (
        <>
<Button variant="contained" 
        color="secondary" 
        className={classes.resumeBtn}
        endIcon={icon ? icon : null}>
        {text}
</Button>  
        </>
    )
}

export default ResumeButton
