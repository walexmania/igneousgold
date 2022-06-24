import React, { useState } from 'react'
import {
  AppBar,
  Avatar,
  Toolbar,
  Tabs,
  Tab,
  TabScrollButton,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material/'
import Logo from '../../assets/images/logo.png'

import SideDrawer from './HomeDrawer'

const PAGES = ['Home', 'Services', 'About Us', 'Contact Us']

const Header = () => {
  // TAB STATES
  const [value, setvalue] = useState(0)

  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color="secondary"
        elevation={0}
        sx={{ backgroundColor: 'transparent', color: 'black' }}
      >
        <Toolbar
          style={{
            width: '90%',
            margin: '0 auto',
          }}
        >
          <Avatar
            alt="logo"
            src={Logo}
            sx={{ width: 80, height: 80 }}
            variant="square"
          />

          {isMatch ? (
            <>
              <Typography
                component="h2"
                variant="h6"
                sx={{
                  marginLeft: 'auto',
                  fontWeight: 700,
                  letterSpacing: 3,
                  lineHeight: 2,
                  wordSpacing: 5,
                }}
              >
                IGNEOUS <span style={{ color: 'gold' }}>GOLD</span>
              </Typography>
              <SideDrawer />
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                component="h3"
                style={{
                  textTransform: 'uppercase',
                  position: 'relative',
                  right: '15px',
                  top: '6px',
                  fontWeight: '700',
                }}
              >
                Igneous
                <Typography
                  variant="h6"
                  component="span"
                  style={{
                    marginTop: '-14px',
                    color: 'gold',
                    display: 'block',
                  }}
                >
                  Gold
                </Typography>
              </Typography>

              <Tabs
                component="ul"
                textColor="inherit"
                sx={{ marginLeft: 'auto', fontSize: '1.2rem' }}
                value={value}
                onChange={(e, value) => setvalue(value)}
                indicatorColor="secondary"
                orientation="horizontal"
                ScrollButtonComponent={TabScrollButton}
              >
                {PAGES.map((page, index) => (
                  <Tab
                    key={index}
                    label={page}
                    tabIndex={index}
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                    }}
                  />
                ))}
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Header
