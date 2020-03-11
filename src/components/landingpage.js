import React from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from './images/Malar.jpg';

const Landing = () => {
  return (
    <div className="container">
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src={logo}
            alt="avatar"
            className="avatar-img"
          />
          <div className="banner-text">
            <h1>Front-end developer</h1>
            <hr />
            <p>React | JavaScript | Next | HTML5/CSS3 | Bootstrap | Scss | Git | .Net | Umbraco | SQL/Mysql</p>
          </div>
        </Cell>
      </Grid>
    </div>
  )
}

export default Landing;
