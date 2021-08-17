import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import SpeedIcon from '@material-ui/icons/Speed';
import { useState } from 'react';
import { Button, Container, ButtonGroup, Row, Col } from 'react-bootstrap';

let x=0;
export function SpeedSlider() {
  const [val, setValue] = React.useState(30);
  const [,setState] = useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    x = newValue;
    setState({});
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
            <SlowMotionVideoIcon style={{ color: '#F3EEB1' }}/>
        </Grid>
        <Grid item xs>
          <Slider style={{ color: '#F3EEB1' }} value={val} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
            <SpeedIcon style={{ color: '#F3EEB1' }} />
        </Grid>
      </Grid>
    </div>
  );
}

  