import React, { Component } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCoffee, faCheckSquare,faCamera,faClock } from '@fortawesome/free-solid-svg-icons';
import {Grid , Cell,} from 'react-mdl';
import male from '../asset/img/male.png';

class Home extends Component{
    render(){
        return(
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img src= {male} className='avatar-img' alt='avatar'/>
                    <div className="banner-text">
                        <h1>I am Web Developer</h1>
                        <hr/>
                        <p> HTML / CSS | Bootstrap | JavaScripts | JSon | ReactJs | PHP | Codeigniter | MySql </p>
                        <div className="social-links">
                            {/*LinkedIn */}
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faCoffee} />
                            </a>                            
                            {/*Google+ */}
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faCamera} />
                            </a>                            
                            {/*Youtube */}
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faClock} />
                            </a>                          
                            {/*Facebook */}
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faCheckSquare} />
                            </a>
                            {/* <Iconfont /> */}
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
        )
    }

}
export default Home;