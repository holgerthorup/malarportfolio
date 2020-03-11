import React from 'react';
import { Grid, Cell } from 'react-mdl';

const Education = (props) => {
  return (
    <Grid>
      <Cell col={4}>
        <p>{props.startYear} - {props.endYear}</p>
      </Cell>
      <Cell col={8}>
        <h4 style={{ marginTop: '0px' }}>{props.schoolDescription}</h4>
        <h5><i>{props.access}</i></h5>
        <p>{props.schoolName}</p>
      </Cell>
    </Grid>
  )
}

export default Education;
