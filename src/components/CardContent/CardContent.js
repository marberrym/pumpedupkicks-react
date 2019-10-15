import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import './cardContent.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    margin: '10em',
    width: '60%',
    padding: '2em',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    margin: '1em',
    fontFamily: '"Poppins", sans-serif',
  },
  description: {
    margin: '1em',
    fontFamily: '"Poppins", sans-serif',
  },
  button: {
    margin: '1em',
    width: '10em',
  },
};

let CardContent = props => (
  <Card className={props.classes.card}>
    <Typography variant='h4' className={props.classes.header}>
      {props.header}
    </Typography>
    <Typography className={props.classes.description}>
      {props.description}
    </Typography>
    {props.type === 'home' ? (
      <div>
        <Button
          color='secondary'
          variant='contained'
          className={props.classes.button}
        >
          Documentation
        </Button>
        <Button
          color='secondary'
          variant='contained'
          className={props.classes.button}
        >
          Get Started
        </Button>
      </div>
    ) : null}
  </Card>
);

export default withStyles(styles)(CardContent);
