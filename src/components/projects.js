import React, { Component } from 'react'
import {Tabs, Tab,Card,CardTitle,CardText,CardActions,Button,Grid,Cell} from "react-mdl";
import react1 from '../asset/img/react-2.png';
import react3 from '../asset/img/react-3.png';
import react4 from '../asset/img/react-4.png';
import code1 from '../asset/img/code-1.jpg';
import code2 from '../asset/img/code-2.png';
import code3 from '../asset/img/code-3.png';
import html1 from '../asset/img/html-01.png';
import html2 from '../asset/img/html-02.png';
import html3 from '../asset/img/html-03.png';

class Projects extends Component {

    constructor(props) {
          super(props)
          this.state = { activeTab: 0 }
    }

    toggleCategories() {

        if(this.state.activeTab === 0)
        {
            return(
                <div className="landing-projects">
                    {/* Projects 01 */}

                    <Card shadow={3} style={{width: '320px', height: '320px', margin: 'auto'}} className="card">
                        <CardTitle expand style={{color:'#1C2833', background:`url(${react4}) center/cover no-repeat`}}>Projects #01  </CardTitle>
                        <CardText>
                        React Projects Portfolio,Dummy text.
                        </CardText>
                        <CardActions border>
                            {/* Raised button with ripple */}
                            <Button color>View Update</Button>
                        </CardActions>
                    </Card>

                    {/* Projects 02 */}
                    <Card shadow={3} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#1C2833', background: `url(${react3})center/cover no-repeat`}}>Projects #02</CardTitle>
                        <CardText>
                        React Projects Portfolio,Dummy text.
                        </CardText>
                        <CardActions border>
                            {/* Raised button with ripple */}
                            <Button color ripple>View Update</Button>
                        </CardActions>
                    </Card>
                    {/* Projects 03 */}
                    <Card shadow={3} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#1C2833', background: `url(${react1}) center center/cover no-repeat`}}>Projects #03</CardTitle>
                        <CardText>
                        React Projects Portfolio,Dummy text.
                        </CardText>
                        <CardActions border>
                            {/* Raised button with ripple */}
                            <Button color ripple>View Update</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 1)
        {
            return (
                <div className="landing-projects">
                    {/* Projects 01 */}
                    <Card shadow={3} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#1C2833', background: `url(${code1}) center center/cover no-repeat`}}>Projects #01</CardTitle>
                        <CardText>
                        React Projects Portfolio,Dummy text.
                        </CardText>
                        <CardActions border>
                            {/* Raised button with ripple */}
                            <Button color ripple>View Update</Button>
                        </CardActions>
                    </Card>

                    {/* Projects 02 */}
                    <Card shadow={3} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#1C2833', background: `url(${code2}) center center/cover no-repeat`}}>Projects #02</CardTitle>
                        <CardText>
                        React Projects Portfolio,Dummy text.
                        </CardText>
                        <CardActions border>
                            {/* Raised button with ripple */}
                            <Button color ripple>View Update</Button>
                        </CardActions>
                    </Card>
                    {/* Projects 03 */}
                    <Card shadow={3} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#1C2833', background: `url(${code3}) center center/cover no-repeat`}}>Projects #03</CardTitle>
                        <CardText>
                        React Projects Portfolio,Dummy text.
                        </CardText>
                        <CardActions border>
                            {/* Raised button with ripple */}
                            <Button color ripple>View Update</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }else if (this.state.activeTab === 2) {
            return (
                <div className="landing-projects">
                    {/* Projects 01 */}
                    <Card shadow={3} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#1C2833', background: `url(${html1}) center center/cover no-repeat`}}>Projects #01</CardTitle>
                        <CardText>
                        React Projects Portfolio,Dummy text.
                        </CardText>
                        <CardActions border>
                            {/* Raised button with ripple */}
                            <Button color ripple>View Update</Button>
                        </CardActions>
                    </Card>

                    {/* Projects 02 */}
                    <Card shadow={3} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#1C2833', background: `url(${html2}) center center/cover no-repeat`}}>Projects #02</CardTitle>
                        <CardText>
                        React Projects Portfolio,Dummy text.
                        </CardText>
                        <CardActions border>
                            {/* Raised button with ripple */}
                            <Button color ripple>View Update</Button>
                        </CardActions>
                    </Card>
                    {/* Projects 03 */}
                    <Card shadow={3} style={{width: '320px', height: '32#0px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#1C2833', background: `url(${html3}) center center/cover no-repeat`}}>Projects #03</CardTitle>
                        <CardText>
                        React Projects Portfolio,Dummy text.
                        </CardText>
                        <CardActions border>
                            {/* Raised button with ripple */}
                            <Button color ripple>View Update</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
    }
    render(){
        return (
            <div className = "projects-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange ={(tabId) => this.setState({activeTab:  tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>CodeIgniter</Tab>
                    <Tab>HTML/CSS/JQuery</Tab>
                </Tabs>

                <section >
                    <Grid >
                        <Cell col={12}>
                            <div className="content"> { this.toggleCategories() }</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;
