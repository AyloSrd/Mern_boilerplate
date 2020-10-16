import React from "react";
import FormSignup from "../components/Forms/FormSignup";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root :{
    minHeight:"100vh",
    minWidth:"100wh",
    backgroundImage:`url("/assets/ash-edmonds-Koxa-GX_5zs-unsplash.jpg")`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    // filter:"blur(8px)",
 
 
  },
 
 }));


const Signup = (props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
    <FormSignup />;
    </div>)
};

export default Signup;
