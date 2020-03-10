import React from 'react';
import { Grid, Cell } from 'react-mdl';

const Experience = ({ startYear, endYear, companyName, jobName, jobDescription, usedTechnologies }) => {
  return (
    <Grid className="experience">
      <Cell col={4}>
        <p>{startYear} - {endYear}</p>
      </Cell>
      <Cell col={8}>
        <h4 style={{ marginTop: '0px' }}>{companyName}</h4>
        <h6>{jobName}</h6>
        <p>{jobDescription}</p>
        <span>{usedTechnologies} </span>
      </Cell>
    </Grid>
  )
}
export default Experience;
