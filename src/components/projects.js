import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} >
            <CardTitle  >Search and Display data from API</CardTitle>
            <CardText>
              <p> This website is made for company which rents out summer houses to its clients. There are two main features in this website. The first feature is to show the property details .Using my front end skills I help the product owner (company owner) show property details such as Property picture, number of bedrooms, guest counts, city and price per night. </p>
              <p>The second important feature is to show price range in the filter. As the product owner has umpteen number of summer houses, In order to help the clients  select the summer houses based on their affordability, I have added the price range in the filter.</p>
              <p>Used Technologies : React, HTML5, CSS3 And API</p>
            </CardText>
            <CardActions border>
              <Button ><Link to="https://github.com/malarm/React-With-API" target="_blank" className="social-title">GitHub</Link></Button>
              <Button ><Link to="https://novasol.malarm09.now.sh/" target="_blank" className="social-title">Live Demo</Link></Button>
            </CardActions>

          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ height: 'min-content' }}>
            <CardTitle >Malar Resort</CardTitle>
            <CardText>
              <p> I developed a website for a resort. The search function is the main function of the website.
              Hotel rooms can be selected based on room type, number of guests and the price of the rooms.
               Web API is an important technical feature.</p>
              <p>Used Technologies : React, React Router, React Icons, HTML5, CSS3 And contentful API</p>

            </CardText>
            <CardActions border>
              <Button ><Link to="https://github.com/malarm/malarresort" target="_blank" className="social-title">GitHub</Link></Button>
              <Button ><Link to="https://malarresort.now.sh/" target="_blank" className="social-title">Live Demo</Link></Button>
            </CardActions>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{ height: 'min-content' }}>
            <CardTitle >My Profile Website</CardTitle>
            <CardText>
              <p> I developed a website for a resort. The search function is the main function of the website.
              Hotel rooms can be selected based on room type, number of guests and the price of the rooms.
               Web API is an important technical feature.</p>
              <p>Used Technologies : React, React MDL material design, React Router, HTML5, CSS3 </p>

            </CardText>
            <CardActions border>
              <Button ><Link to="https://github.com/malarm/malarresort" target="_blank" className="social-title">GitHub</Link></Button>
              <Button ><Link to="https://malarresort.now.sh/" target="_blank" className="social-title">Live Demo</Link></Button>
            </CardActions>
          </Card>



        </div>


      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5}>
            <CardTitle  >Search Movies from IMDB </CardTitle>
            <CardText>
              <p> I developed a website to learn to use web API when I develop. It was to challenge myself as I never worked with web API before. The website has a search function where we can insert one or many IMDB IDs. When a IMDB ID is inserted for the first time, a web API  is used to bring information from the third party website. Once a IMDB is checked  for the first time, the data is stored in backend of  local website. It means that when a IMDB ID is inserted for the second time, the data comes from the local backend, not the third part website. It was a good learning process. </p>
              <p>Used Technologies : C#, ASP.NET.Core, API, Entity framework, MS  SQL, Bootstrap</p>
            </CardText>
            <CardActions border >
              <Button ><Link to="https://github.com/malarm/IMDB" target="_blank" className="social-title" >GitHub</Link></Button>
              <Button ><Link to="https://novasol.malarm09.now.sh/" target="_blank" className="social-title">Live Demo</Link></Button>
            </CardActions>
          </Card></div>
      )
    }

  }



  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
          <Tab>React</Tab>
          <Tab>.Net</Tab>
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Projects;
