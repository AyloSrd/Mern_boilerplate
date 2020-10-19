import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import  IconButton from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';






const useStyles = makeStyles((theme) => ({
 root :{
   minHeight:"100vh",
   minWidth:"100wh",
   backgroundImage:`url("/assets/ash-edmonds-Koxa-GX_5zs-unsplash.jpg")`,
   backgroundRepeat:'no-repeat',
   backgroundSize:'cover',
   display:"flex",
   justifyContent:"center",
  //  alignItems:"center",


 },
 headerTitle:{
     position:"absolute",
     color:"#fff",
     fontFamily:'Nunito',
     fontSize:'3rem',
     marginTop:"200px",
    //  alignItem:"center",
     textAlign:"center",
     display:"flex",
     flexDirection:"column",
     justifyContent:"center",
 },
 colorText:{
  color:"#c247a6",
},
colorTextp:{
  color:"	#fff",

},
icon :{
  color:'#fff',
  fontSize:'1rem',
  backgroundColor:"#5e1447",
  // height:'50px',
  marginTop:"90px"
 
},

goDawn:{
  position:"absolute",
  color:'#fff',
  fontSize:"4rem",
  marginTop:"150px"
}
}));


const Header = (props) => {


    const classes = useStyles();



    return (
      <div className={classes.root}>

      
      <div className={classes.headerTitle}>
     
      <h1 >My <span className={classes.colorText}>ZoomBa .</span></h1>
      
      <br/>
      <h2 className={classes.colorTextp}>live code sharing App</h2>

      <NavLink  to="/signin"> 
      <Button to="/signin" className={classes.icon}> Register Now</Button>
      </NavLink>

      <IconButton>
     <ExpandMoreIcon className={classes.goDawn}/>
     </IconButton>


      </div>
      
      
      </div>
    );
  
}
export default Header
