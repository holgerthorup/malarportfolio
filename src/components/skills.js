import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

const Skills = (props) => {
  return (
    <Grid className="skill">
      <Cell col={12}>
        <div>{props.skill} </div>
      </Cell>
    </Grid>
  )
}
export default Skills;
