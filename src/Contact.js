import React from 'react'  
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import D from './D.png'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },

  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight:700
    },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#4f83cc'
    } 
  }
}))
//The JSS style objects defined here will be injected into the 
//component using the hook returned by makeStyles. The makeStyles hook API 
//takes a function as an argument and gives access to our custom theme variables,
// which we can use when defining the styles.


//The Home component will contain a Material-UI Card with a headline,
//an image, and a caption, all styled with the styles we defined previously
// and returned by calling the useStyles() hook.

function Contact(){
  const classes = useStyles()
  return (<Card className={classes.card}>
              <Typography variant="h6" className={classes.title}>
               Strike
              </Typography>
              <CardMedia className={classes.media} image={D} title="Akihabara"/>

              <Typography variant="body2" component="p" className={classes.credit} color="textSecondary"></Typography>
              <CardContent>
                
              </CardContent>
            </Card>
            
            )
          }

export default Contact
