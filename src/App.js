import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link } from 'react-router-dom';

function App() {
  return (
    // {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
    <div className="demo-big-content">
        <Layout>
            <Header className='header-color' title="MyPortfolio"  scroll>
                <Navigation >
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About</Link>
                </Navigation>
            </Header>
            <Drawer  className='drawer-bg' title="MyPortfolio">
                <Navigation >
                    <Link  className ="drawer-anchor" to="/resume">Resume</Link>
                    <Link  className ="drawer-anchor" to="/projects">Projects</Link>
                    <Link  className ="drawer-anchor" to="/about">About</Link>
                </Navigation>
            </Drawer>
            <Content>
            {/* Components Route Section */}
            <Main/>
            </Content>
        </Layout>
    </div>
  )
}

export default App;
