import React from 'react' 
import {Link} from 'react-router-dom' 
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import E from './E.png'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },

  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: '#4f83cc'
  },
  media: {
    minHeight:500
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

function App(){
  const classes = useStyles()
  return (<Card className={classes.card}>
              <Typography variant="h6" className={classes.title}>
                Home Page
              </Typography>
              <CardMedia className={classes.media} image={E} title="Akihabara"/>
              <Typography variant="body2" component="p" className={classes.credit} color="textSecondary"></Typography>
              <CardContent>
                <Typography variant="body1" component="p">
                  Welcome to Anime pictures
                  <br/>
                  Click image you want to see
                  <br/>
                  <Link to='/Contact'>Strike</Link> 
                  <br/>
                  <Link to='/About'>Zoro</Link> 
                </Typography>
              </CardContent>
            </Card>
            
            )
          }
      
export default App  
