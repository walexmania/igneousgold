import React from 'react'
import './HomeAbout.css'
import ArchitectureIcon from '@mui/icons-material/Architecture'
import { Avatar, Container } from '@mui/material'

const About = () => {
  return (
    <section>
      <h1 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 6vw, 3rem)' }}>
        ABOUT <span style={{ color: 'gold' }}>US</span>
      </h1>
      <Container fixed maxWidth="sm">
        <div className="aboutus-section">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="aboutus">
                  <h2 className="aboutus-title">About Us</h2>
                  <p className="aboutus-text">
                    Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                    lorem ante, dapibus in.
                  </p>
                  <p className="aboutus-text">
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem
                  </p>
                  <a className="aboutus-more" href="!#">
                    read more
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="aboutus-banner">
                  <img
                    src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-5 col-sm-6 col-xs-12">
                <div className="feature">
                  <div className="feature-box">
                    <div className="clearfix">
                      <div className="iconset">
                        <Avatar
                          style={{
                            pposition: 'relative',
                            left: '44px',
                            color: '#fff',
                            border: '1px solid #fdb801',
                            background: 'transparent',
                          }}
                        >
                          <ArchitectureIcon style={{ color: '#fdb801' }} />
                        </Avatar>
                        {/* <span className="glyphicon glyphicon-cog icon"></span> */}
                      </div>
                      <div className="feature-content">
                        <h4>Work with heart</h4>
                        <p>
                          Aenean vulputate eleifend tellus. Aenean leo ligula,
                          porttitor eu, consequat vitae, eleifend ac, enim.
                          Aliquam lorem ante, dapibus in.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="feature-box">
                    <div className="clearfix">
                      <div className="iconset">
                        <Avatar
                          style={{
                            pposition: 'relative',
                            left: '44px',
                            color: '#fff',
                            border: '1px solid #fdb801',
                            background: 'transparent',
                          }}
                        >
                          <ArchitectureIcon style={{ color: '#fdb801' }} />
                        </Avatar>
                        {/* <span className="glyphicon glyphicon-cog icon"></span> */}
                      </div>
                      <div className="feature-content">
                        <h4>Reliable services</h4>
                        <p>
                          Donec vitae sapien ut libero venenatis faucibu. Nullam
                          quis ante. Etiam sit amet orci eget eros faucibus
                          tincidunt
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="feature-box">
                    <div className="clearfix">
                      <div className="iconset">
                        <Avatar
                          // style={{
                          //   pposition: 'relative',
                          //   left: '44px',
                          //   color: '#fff',
                          //   border: '1px solid #fdb801',
                          //   background: 'transparent',
                          // }}
                          style={{
                            // color: '#f4b841',
                            padding: '0px',
                            // fontSize: '40px',
                            border: '1px solid #fdb801',
                            borderRadius: '100px',
                            color: '#fdb801',
                            fontSize: '28px',
                            height: '70px',
                            lineHeight: '70px',
                            textAlign: 'center',
                            width: '70px',
                          }}
                        >
                          {/* <ArchitectureIcon style={{ color: '#fdb801' }} /> */}
                          <ArchitectureIcon />
                        </Avatar>
                        {/* <span className="glyphicon glyphicon-cog icon"></span> */}
                      </div>
                      <div className="feature-content">
                        <h4>Great support</h4>
                        <p>
                          Aenean vulputate eleifend tellus. Aenean leo ligula,
                          porttitor eu, consequat vitae, eleifend ac, enim.
                          Aliquam lorem ante, dapibus in.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
