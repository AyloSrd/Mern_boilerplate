

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import steps from '../static/steps'

import ImageCard from './ImageCard';

const useStyles = makeStyles((theme) => ({

    root:{
        backgroundColor:"black",
       
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
        color: "#c247a6",
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


function Container() {


    const classes = useStyles();

    return (
        <div className={classes.root} id="how-to-work">
            <h1 className={classes.Title}>Learn from the best devs</h1>
            <br/>
                <div className={classes.Card}>
                <ImageCard  step={steps[0]}/>
                <ImageCard step={steps[1]} />
                <ImageCard step={steps[2]}/>
                </div>  
                    
   

        </div>
    )
}

export default Container
