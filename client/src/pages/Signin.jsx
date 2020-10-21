import React from "react";
import FormSignin from "../components/Forms/FormSignin";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root :{
    minHeight:"100vh",
    minWidth:"100wh",
    backgroundImage:`url("/assets/ash-edmonds-Koxa-GX_5zs-unsplash.jpg")`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  
    // filter:" blur(8px)",
    // transform:" scale(1.2)",
  },
 
 }));


const Signin = (props) => {

  const classes = useStyles();

  return (
  <div className={classes.root}>
  <FormSignin />;
  </div>)
};

export default Signin;
