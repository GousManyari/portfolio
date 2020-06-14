import React, { Component } from 'react';
import { Grid, Cell,List,ListItem,ListItemContent} from "react-mdl";
import male from '../asset/img/male.png';

class About extends Component {
    render(){
        return (
          
            <div className="about-body">
                <Grid className="about-grid" >

                    <Cell col={6} >
                        <h3>Gous Manyari</h3>
                        <img src={male} alt="Gous Manyari"
                            style={{width:'250px', }}
                        />
                        <p>Hello Dummy Text Apparently we had reached a great height in the atmosphere,
                            for the sky was a dead black, and the stars had ceased to twinkle.
                            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside,
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h3>Contact Me</h3>
                        <hr/>
                        <List style={{marginTop:'3em',justifyContent:'center'}}>
                            <ListItem style={{fontFamily:'Audiowide',fontSize:'25px'}}>
                                <ListItemContent icon="phone_android"  className="avatar">+91-7755952294</ListItemContent>
                            </ListItem>
                            <ListItem style={{fontFamily:'Audiowide',fontSize:'25px'}}>
                                <ListItemContent icon="person">Gous Manyari</ListItemContent>
                            </ListItem>
                            <ListItem style={{fontFamily:'Audiowide',fontSize:'25px'}}>
                                <ListItemContent icon="mail">gousmanyari@gmail.com</ListItemContent>
                            </ListItem>
                        </List>
                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default About;