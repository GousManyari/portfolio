import React, { Component } from 'react'
import {Tabs, Tab,Card,CardTitle,CardText,CardActions,Button,Grid,Cell} from "react-mdl";
// import imgreact from "../asset/img/react-2";

class Projects extends Component {

    constructor(props){
        super(props)
        this.state = { activeTab: 0 } 
        console.log(this.state.activeTab);
    }

    toggleCategories() {

        if(this.state.activeTab === 0)
        {
            return(
                <div className="landing-projects">
                    {/* Projects 01 */}
                    <Card shadow={3} style={{width: '320px', height: '320px', margin: 'auto'}} className="card">
                        <CardTitle expand style={{color: '#fff', background: "url(../asset/img/react-2.png) 100% no-repeat red"}}>Projects #01</CardTitle>
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
                        <CardTitle expand style={{color: '#fff', background: 'url(../asset/img/code-1.jpg) bottom right 15% no-repeat #46B6AC'}}>Projects #02</CardTitle>
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
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Projects #03</CardTitle>
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
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Projects #01</CardTitle>
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
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Projects #02</CardTitle>
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
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Projects #03</CardTitle>
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
                        <CardTitle expand style={{color: '#fff', background: 'url(../asset/img/react-3.png)'}}>Projects #01</CardTitle>
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
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Projects #02</CardTitle>
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
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Projects #03</CardTitle>
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
            <div className = "demo-tabs">
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