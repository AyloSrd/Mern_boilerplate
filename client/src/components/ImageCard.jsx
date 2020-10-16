import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    background:"rgba(0,0,0,1)",
    marginTop:"15%"
  
  },
  media: {
    height: 100,
    width:100,
    borderRadius: "50%",
    marginLeft:"40%",
  
  },
  title:{
    
    fontFamily:'Nunito',
    fontWeight:"bold",
    fontSize:'2rem',
    textAlign:"center",
    color:"#fff",
  },

  desc:{
    fontFamily:'Nunito',
  
    fontSize:'1.3rem',
    textAlign:"center",
    color:"#ddd",
  }
});



export default function ImageCard({step}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
     
        <CardMedia
          className={classes.media}
          image={step.imageURL}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
           {step.title}
          </Typography>
          <Typography variant="body2"  component="p" className={classes.desc}>
           {step.description}
          </Typography>
        </CardContent>
     
     
    </Card>
  );
}