import React from 'react';
import ImageCard from './ImageCard'
import { makeStyles } from '@material-ui/core/styles';
import steps from '../static/steps'



const useStyles = makeStyles((theme) => ({

    root:{
        backgroundColor:"none",
       
        minHeight:"90vh",
        display:"flex",
       
        justifyContent:"center",
    },

    Title:{
        position:"absolute",
        color:"#fff",
        fontFamily:'Nunito',
        fontSize:'3rem',
        textAlign:"center",
        
        marginTop:"50px",
    },
   Card :{
    textAlign:"center",
    display:"flex",
   flexDirection:"row",
    justifyContent:"center",
    margin:"20px"
   }
   
   
    
   }));

function JoinSession() {
    const classes = useStyles();
    return (
        <div>
             <div className={classes.Card}>
                <ImageCard  step={steps[0]}/>
                <ImageCard step={steps[1]} />
                <ImageCard step={steps[2]}/>
                </div>  

        </div>
    )
}

export default JoinSession
