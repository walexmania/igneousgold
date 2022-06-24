import * as React from 'react'
import {
  Avatar,
  Container,
  Grid,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import './HomeFooter.css'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled'
import MailIcon from '@mui/icons-material/Mail'
import TelegramIcon from '@mui/icons-material/Telegram'

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import Logo from '../../assets/images/logo.png'

const Footer = () => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <footer className="footer-section">
      <Container>
        <div className="footer-cta pt-5 pb-5">
          <Grid container className="row">
            <Grid item xs={12} md={4}>
              <div className="single-cta">
                <LocationOnIcon
                  fontSize="large"
                  style={{
                    color: '#ff5e14',
                    float: 'left',
                    marginTop: '35px',
                  }}
                />

                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>IKola, Ipaja, Lagos</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="single-cta">
                <PhoneEnabledIcon
                  fontSize="large"
                  style={{
                    color: '#ff5e14',
                    float: 'left',
                    marginTop: '35px',
                  }}
                />

                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>08102767895</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="single-cta">
                <MailIcon
                  fontSize="large"
                  style={{
                    color: '#ff5e14',
                    float: 'left',
                    marginTop: '35px',
                  }}
                />
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>talktoabiola@gmail.com</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="footer-content pt-5">
          <Grid container spacing={2} className="row">
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              className="col-xl-4 col-lg-4 mb-50"
            >
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <Avatar
                      alt="logo"
                      src={Logo}
                      sx={{ width: 80, height: 80, background: '#fff' }}
                      variant="circular"
                    />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="!#" className="social-icons">
                    <IconButton
                      aria-label="facebook-social"
                      size="large"
                      style={{
                        width: '40px',
                        height: '40px',
                        background: '#3B5998',
                      }}
                    >
                      <FacebookOutlinedIcon
                        style={{
                          background: '#3B5998',
                          color: '#fff',
                          fontSize: '40px',
                          borderRadius: '50%',
                        }}
                      />
                    </IconButton>
                  </a>
                  <a href="!#" className="social-icons">
                    <IconButton
                      aria-label="twitter-social"
                      size="large"
                      style={{
                        width: '40px',
                        height: '40px',
                        background: '#55ACEE',
                      }}
                    >
                      <TwitterIcon
                        style={{
                          background: '#55ACEE',
                          color: '#fff',
                          fontSize: '30px',
                        }}
                      />
                    </IconButton>
                  </a>
                  <a href="!#" className="social-icons">
                    <IconButton
                      aria-label="linkedin-social"
                      size="large"
                      style={{
                        width: '40px',
                        height: '40px',
                        background: '#007bb5',
                      }}
                    >
                      <LinkedInIcon
                        style={{
                          color: '#fff',
                          background: '#007bb5',
                          fontSize: '30px',
                        }}
                      />
                    </IconButton>
                  </a>
                </div>
              </div>
            </Grid>
            <Grid
              sx={{
                display: `${isMatch ? 'none' : 'block'}`,
              }}
              item
              xs={12}
              sm={6}
              md={4}
              //   md={`${isMatch ? 0 : 4}`}
              className="col-xl-4 col-lg-4 col-md-6 mb-30"
            >
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="!#">Home</a>
                  </li>
                  <li>
                    <a href="!#">about</a>
                  </li>
                  <li>
                    <a href="!#">services</a>
                  </li>
                  <li>
                    <a href="!#">portfolio</a>
                  </li>
                  <li>
                    <a href="!#">Contact</a>
                  </li>
                  <li>
                    <a href="!#">About us</a>
                  </li>
                  <li>
                    <a href="!#">Our Services</a>
                  </li>
                  <li>
                    <a href="!#">Expert Team</a>
                  </li>
                  <li>
                    <a href="!#">Contact us</a>
                  </li>
                  <li>
                    <a href="!#">Latest News</a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              className="col-xl-4 col-lg-4 col-md-6 mb-50"
            >
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i className="fab fa-telegram-plane">
                        <TelegramIcon />
                      </i>
                    </button>
                  </form>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <div className="copyright-area">
        <Container className="container">
          <Grid container className="row" spacing={2}>
            {isMatch ? (
              <>
                <Grid
                  item
                  style={{
                    width: '100%',
                  }}
                  className="col-xl-6 col-lg-6 text-center text-lg-left"
                >
                  <div className="copyright-text">
                    <p
                      style={{
                        width: '100%',
                        textAlign: 'center',
                      }}
                    >
                      Copyright &copy; 2022, All Right Reserved{' '}
                      <a href="https://github.com/walexmania/">
                        Olatunji Adewale
                      </a>
                    </p>
                  </div>
                </Grid>
                <Grid
                  item
                  className="col-xl-6 col-lg-6 d-none d-lg-block text-right"
                  style={{ display: 'none' }}
                >
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="!#">Home</a>
                      </li>
                      <li>
                        <a href="!#">Terms</a>
                      </li>
                      <li>
                        <a href="!#">Privacy</a>
                      </li>
                      <li>
                        <a href="!#">Policy</a>
                      </li>
                      <li>
                        <a href="!#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </Grid>
              </>
            ) : (
              <>
                <Grid
                  item
                  className="col-xl-6 col-lg-6 text-center text-lg-left"
                >
                  <div className="copyright-text">
                    <p>
                      Copyright &copy; 2022, All Right Reserved{' '}
                      <a href="https://github.com/walexmania">
                        Olatunji Adewale
                      </a>
                    </p>
                  </div>
                </Grid>
                <Grid
                  item
                  className="col-xl-6 col-lg-6 d-none d-lg-block text-right"
                >
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="!#">Home</a>
                      </li>
                      <li>
                        <a href="!#">Terms</a>
                      </li>
                      <li>
                        <a href="!#">Privacy</a>
                      </li>
                      <li>
                        <a href="!#">Policy</a>
                      </li>
                      <li>
                        <a href="!#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
