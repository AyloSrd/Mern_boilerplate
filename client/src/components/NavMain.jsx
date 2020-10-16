import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import { Toolbar } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({

appbar :{
  background:'none',
  fontFamily:'Nunito',
 
},

appbarWrapper:{
width:'90%',
margin:'0 auto'
},

appbarTitle :{
flexGrow:'1',
},

icon :{
  color:'#fff',
  fontSize:'1rem',
 
},
colorText:{
  color:"#c247a6",
},

iconBackground : {
  color:'#fff',
  fontSize:'1rem',
  backgroundColor:"#c247a6",
},
isLoggenIn:{
  diplay:'flex',
  flexDirection:"row"
},
iconUser:{
marginLeft:"50px"
}
}));

const NavMain = (props) => {
  const { context } = props;
  const classes = useStyles();

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <AppBar  className={classes.appbar} elevation={0}>

   <Toolbar className={classes.appbarWrapper}>
   
                <NavLink className={classes.appbarTitle} exact to="/">
                  <h1>My <span className={classes.colorText}>ZoomBa .</span></h1>
                </NavLink>

                <ul>
                  {context.isLoggedIn && (
                    <React.Fragment>

                    

                    
                    <Toolbar>
                      <li>
                        <NavLink to="/profile" >
                         <Button className={classes.icon}> {context.user && context.user.lastName} </Button>
                        </NavLink>
                      </li>
                      <li>
                        {/* <p onClick={handleLogout}>Logout</p> */}
                        <Button onClick={handleLogout} className={classes.iconBackground}>Logout </Button>
                      </li>

                      </Toolbar> 
                      
                     
                    </React.Fragment>
                  )}

                  {!context.isLoggedIn && (
                    <React.Fragment >
                      <Toolbar>
                   
                      <li >
                
                        <NavLink  to="/signin"> 
                        <Button className={classes.icon}>Sign In </Button>
                        </NavLink>
                      </li>
                     
                      <li>
                     
                        <NavLink to="/signup"> 
                        <Button className={classes.iconBackground}>Sign Up</Button> 
                        </NavLink>
                      </li>

                      </Toolbar> 
                    </React.Fragment>
                  )}

              </ul>
    
    </Toolbar>

    </AppBar>
  );
};

export default withUser(NavMain);
