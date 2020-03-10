import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4} className="resume-right">
            <h4 style={{ color: 'grey' }}>Front End Developer</h4>
            <hr className="line" />
            <p>I am driven by continuous development both professionally and personally. My result and detail- oriented
              attitude to work helps me provide a professional</p>
            <hr className="line" />
            <h5>Phone</h5>
            <p>91732019</p>
            <h5>Email</h5>
            <p>malarm09@gmail.com</p>
            <div className="social-links">

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/malar-ruban-a02669b5/" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
            </div>
            <h5>Languages</h5>
            <p>Danish : Limited Working Proficiency</p>
            <p>English : Professional Working Proficiency</p>
            <p>Tamil : Native or Bilingual Proficiency</p>
            <hr className="line" />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2007}
              endYear={2010}
              schoolName="Bharathidasan University , Trichy, India "
              schoolDescription="Master in Computer Application  "
              access="Assessed and accredited by the Danish Ministry of Education"
            />
            <Education
              startYear={2004}
              endYear={2007}
              schoolName="Bharathidasan University , Trichy, India "
              schoolDescription="Bachelor in Chemistry "
            />
            <hr className="line" />
            <h2>Experience</h2>
            <Experience
              startYear='January 2020'
              endYear='March 2020'
              companyName='Applied Technologies '
              jobName="Front end developer Intern "
              jobDescription={
                <ul>
                  <li>Took care of front-end development in React, Next ,Redux ,Git ,SCSS ,HTML5 ,CSS3</li>
                  <li> Learnt development both from personal projects and on job</li>
                </ul>
              }
            />

            <Experience
              startYear='August 2017'
              endYear='June 2018'
              companyName='DEO '
              jobName="Web developer and IT supporter  "
              jobDescription={
                <ul>
                  <li>Developed and maintained the following websites in C#, ASP.NET MVC and Umbraco : www.deo.dk, www.undervisning.deo.dk ,www.euforedrag.dk www.notat.dk</li>
                  <li>Applied scrum method in development </li>
                  <li> Close cooperation with communication mangers, graphic designer and project leaders on a daily basis.</li>
                  <li>Offered technical support to the team
                   <li> Maintained domain and worked closely together with domain supplier</li>
                  </li>
                </ul>
              }
              usedTechnologies="Used Technologies : C#, ASP.NET MVC, SQL, Umbraco, HTML, CSS, Javascript"
            />
            <Experience
              startYear=' April 2014'
              endYear='July 2014'
              companyName='Xenos IT '
              jobName="Web developer   "
              jobDescription={
                <ul>
                  <li>Programmed in Drupal the website : www.cphcasting.dk</li>
                  <li>Maintained several websites in Wordpress</li>
                  <li>Had a regular customer contact</li>
                </ul>
              }
              usedTechnologies="Used Technologies : PHP, Drupal, Wordpress , HTML, CSS, Javascript"
            />
            <Experience
              startYear=' November 2013'
              endYear='January 2014'
              companyName='Usoftware systems '
              jobName="Developer"
              jobDescription={
                <ul>
                  <li>Gained good experience with PHP, MySQL, CSS, HTML, Drupal</li>
                  <li>We digitalised school materials of a private skole for our customer in the USA</li>
                </ul>
              }
              usedTechnologies="Used Technologies : PHP, , HTML, CSS, MYSQL, JQuery."
            />
            <hr className="line" />
            <h2>Skills</h2>
            <Skills
              skill="React | JavaScript | Next | HTML/CSS | Bootstrap | SCSS | Git | .Net | Umbraco | SQL/Mysql | Visual studio | Agile | Wordpress 
              | Drupal | PHP"

            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
