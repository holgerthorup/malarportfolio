import React from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from './images/Malar.jpg';

const Landing = () => {
  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src={logo}
            alt="avatar"
            className="avatar-img"
          />
          <div className="banner-text">
            <h1>Front End  Developer</h1>
            <hr />
            <p>React | JavaScript | Next | HTML/CSS | Bootstrap | Scss | Git | .Net | Umbraco | SQL/Mysql</p>
          </div>
        </Cell>
      </Grid>
    </div>
  )
}

export default Landing;
