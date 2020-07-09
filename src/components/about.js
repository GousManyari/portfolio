import React, { Component } from 'react';
import { Grid, Cell,List,ListItem,ListItemContent} from "react-mdl";
import male from '../asset/img/male.png';

class About extends Component {
    render(){
        return (

            <div className="about-body">
                <Grid className="about-grid" >
                    <Cell col={6} >
                      <Grid>
                        <Cell col={12}>
                          <h3>Gous Manyari</h3>
                          <img src={male} alt="Gous Manyari"
                              style={{width:'250px', }}
                          />
                          <p align='center'>Assalam Walekum, I am Gous Manyari. I am quit simple.
                          I always like beyond the Beautifulness.Beauty is not on face but from Heart,
                          Thoughts and Helping others.
                          </p>
                        </Cell>
                      </Grid>
                    </Cell>

                    <Cell col={6}>
                          <Grid>
                            <Cell col={12}>
                              <h3 align="center">Contact Me</h3>
                              <hr align="center"/>
                              <List style={{marginTop:'3em',justifyContent:'center'}}>
                                  <ListItem style={{fontFamily:'Audiowide',fontSize:'16px'}}>
                                      <ListItemContent icon="phone_android"  className="avatar">+91-7755952294</ListItemContent>
                                  </ListItem>
                                  <ListItem style={{fontFamily:'Audiowide',fontSize:'16px'}}>
                                      <ListItemContent icon="account_circle">Gous Manyari</ListItemContent>
                                  </ListItem>
                                  <ListItem style={{fontFamily:'Audiowide',fontSize:'16px'}}>
                                      <ListItemContent icon="mail">gousmanyari@gmail.com</ListItemContent>
                                  </ListItem>
                                    <ListItem style={{fontFamily:'Audiowide',fontSize:'16px'}}>
                                      <ListItemContent icon="person_search">https://www.facebook.com/gous.manyari/</ListItemContent>
                                  </ListItem>
                                   <ListItem style={{fontFamily:'Audiowide',fontSize:'16px'}}>
                                      <ListItemContent icon="person_search">https://www.instagram.com/gousmanyari/</ListItemContent>
                                  </ListItem>
                                  <ListItem style={{fontFamily:'Audiowide',fontSize:'16px'}}>
                                      <ListItemContent icon="language">https://gousmanyari.github.io/portfolio/index.html</ListItemContent>
                                  </ListItem>
                              </List>
                            </Cell>
                          </Grid>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default About;
