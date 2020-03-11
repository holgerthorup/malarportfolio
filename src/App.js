import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
        <Header title={<Link className="logo" to="/">Malar Ruban</Link>} scroll >
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Personal Projects</Link>

          </Navigation>
        </Header>
        <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">Malar Ruban</Link>}>
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Personal Projects</Link>

          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  )
}

export default App;
