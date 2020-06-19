import React, { Component } from 'react';
import { Grid,Cell,List,ListItem,ListItemContent } from 'react-mdl';
import male from '../asset/img/male.png';

class Resume extends Component {
    render(){
        return (
            <div className='resume-body' style={{padding:'0px !important'}}>
                <Grid className="resume-grid">
                    <Cell col={4} className="resume-sidebar">
                        <Grid>
                            <Cell col={12}>

                        {/* Profile Image and Contact Section. */}
                                <img src={male}  style={{width:'150px'}} alt="Gous Manyari" />
                                <h5>CONTACT</h5>
                                <hr/>

                                 <ul class="demo-list-icon mdl-list">
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                        <i class="material-icons mdl-list__item-icon">phone_iphone</i>
                                        +91-7755952294
                                        </span>
                                    </li>
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                        <i class="material-icons mdl-list__item-icon">email</i>
                                        gousmanyari@gmail.com
                                        </span>
                                    </li>
                                </ul>

                            {/* Languages Section. */}
                                <h5>LANGUAGES</h5>
                                <hr/>

                                 <ul class="demo-list-icon mdl-list">
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                        <i class="material-icons mdl-list__item-icon">check_circle</i>
                                        English
                                        </span>
                                    </li>
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                        <i class="material-icons mdl-list__item-icon">check_circle</i>
                                        Urdu/Hindi
                                        </span>
                                    </li>
                                     <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                        <i class="material-icons mdl-list__item-icon">check_circle</i>
                                        Marathi
                                        </span>
                                    </li>
                                </ul>
                                 {/* Hobbies Section. */}
                                <h5>HOBBIES</h5>
                                <hr/>

                                <ul class="demo-list-icon mdl-list">
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                        <i class="material-icons mdl-list__item-icon">emoji_objects</i>
                                        Learn New Things
                                        </span>
                                    </li>

                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                        <i class="material-icons mdl-list__item-icon"> sports_volleyball</i>
                                         Playing VollyBall
                                        </span>
                                    </li>

                                     <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                        <i class="material-icons mdl-list__item-icon"> run_circle</i>
                                         WalkIng
                                        </span>
                                    </li>

                                     <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                        <i class="material-icons mdl-list__item-icon"> group_add</i>
                                         Making Good Friend
                                        </span>
                                    </li>

                                     <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                        <i class="material-icons mdl-list__item-icon"> local_mall</i>
                                        Online Shopping
                                        </span>
                                    </li>

                                </ul>

                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell col={8} className="resume-container">
                        <div className="profileName">

                    {/* Profile  Name  & Experience Section. */}
                            <h2>Gous Manyari</h2>
                            <h4>Web Developer</h4>
                            <h5 style={{marginTop:'50px'}}>PROFILE</h5>
                            <hr/>
                            <p align='justify'>One year Experience as a Web Developer in Aptara New Media Pvt. Ltd. My objective is to join an organization where I can utilize my skills as well as abilities to focusing organizational improvement and self-growth as well as my interest is to do well, passionate and enthusiastic to learn new skills. </p>
                            <h5 style={{marginTop:'50px'}}>EDUCATION</h5>
                            <hr/>
                            <ul style={{padding:'10px'}}>
                                <li>Master of Computer Science M.Sc(CS) from SRTM University Nanded. with 60%</li>
                                <li>B.Sc. in ‘Computer Science from SRTM University Nanded. with 65% </li>
                                <li> HSC from Pune divisional board with 64.67%</li>
                                <li> SSC from Latur board with 42%</li>
                            </ul>


                            <h5 style={{marginTop:'50px'}}>EXPERIENCE</h5>
                            <hr/>
                            <p align='justify'>
                            1 year Experience as HTML (Web) Developer in Aptara New Media Pvt. Ltd. 
My role is HTML programmer and my work is create layout in HTML ,CSS ,Bootstrap and Jquery and Updating content of existing site or maintaining websites information. Using Tools PagePro, JobPro Sublime text, Filezilla, Chrome development tools etc.
I have knowledge of HTML, CSS, JavaScript, JQuery, Ajax, Bootstrap, PHP and MySQL database etc.
Microsoft Office, Tools MS-VsCode Sublime Text Editor,PagePro, Filezilla etc.
Ease and willingness to learn, good interpersonal skills, responsible, creative, organized, ability to adopt in new environment, interest in web designer and web developer professional, decision making, knowledge about the HTML, CSS, Bootstrap , Javascripts,PHP , ReactJs and handling of the Internet Technology.

                            </p>
                        {/* TECHNICAL SKILL Section. */}
                             <h5 style={{marginTop:'50px'}}>TECHNICAL SKILL</h5>
                            <hr/>
                            <Grid>
                                <Cell col={6}>
                                    <ul>
                                        <li>HTML/CSS</li>
                                        <li>Javascripts</li>
                                        <li>Bootstrap</li>
                                        <li>MySQL</li>
                                        <li>Reactjs</li>
                                        <li>CodeIgniter</li>
                                        <li>Version Control : GitHub</li>
                                    </ul>
                                </Cell>

                                <Cell>  
                                    <p>I like to learn new Technology and Create Project on it, Adopt New environment etc. </p>

                                </Cell>
                            </Grid>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;