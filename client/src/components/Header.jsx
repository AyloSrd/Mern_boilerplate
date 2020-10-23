import React, { useEffect,useState } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import  IconButton from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Collapse } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
 root :{
   minHeight:"100vh",
   minWidth:"100wh",
   backgroundImage:`url("/assets/ash-edmonds-Koxa-GX_5zs-unsplash.jpg")`,
   backgroundRepeat:'no-repeat',
   backgroundSize:'cover',
   display:"flex",
   justifyContent:"center",
 },
 noOutline : {
  "&:hover,&:focus, $notchedOutline" : {
    outline:"none",
    borderWidth: 0
  }
 },
 headerTitle:{
    //  position:"absolute",
     color:"#fff",
     fontFamily:'Nunito',
     fontSize:'4rem',
     marginTop:"200px",
    //  alignItem:"center",
     textAlign:"center",
     display:"flex",
     flexDirection:"column",
  
 },
 colorText:{
  color:"#c247a6",
  fontSize:'4rem', 
},
colorTextp:{
  color:"	#ffff",
  fontSize:'4rem', 

},
icon :{
  color:'#fff',
  fontSize:'1rem',
  backgroundColor:"#5e1447",
  // height:'50px',
  marginTop:"90px"
 
},

goDawn:{
  // position:"absolute",
  color:'#fff',
  fontSize:"3rem",
  marginTop:"100px",
}
}));


const Header = () => {


    const classes = useStyles();
    const [checked, setChecked ] = useState (false);
    useEffect(() => {
     setChecked(true);
      
    }, [])



    return (

     

      <div className={classes.root}>
      <Collapse in={checked}
      {...(checked ? { timeout: 1500} : {})}
      collapsedHeight={50}>

      <div className={classes.headerTitle}>
     
      <h1 >My <span className={classes.colorText}>ZoomBa .</span></h1>
      
      <br/>
      <h1 className={classes.colorTextp}>live code sharing App</h1>

      <NavLink  to="/signup"> 
      <Button className={classes.icon}> Register Now</Button>
      </NavLink>

<Scroll to="how-to-work" smooth={true} duration={300} delay={100}>
      <IconButton className={classes.noOutline}>
     <ExpandMoreIcon className={classes.goDawn}/>
     </IconButton>
</Scroll>
   
      </div>
      </Collapse>
      
      </div>
    
   
    );
  
}
export default Header
