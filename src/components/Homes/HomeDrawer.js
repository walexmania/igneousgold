import React, { useState } from 'react'
import {
  Drawer,
  List,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from '@mui/material'
import SortIcon from '@mui/icons-material/Sort'
import HomeIcon from '@mui/icons-material/Home'
import WorkIcon from '@mui/icons-material/Work'
import InfoIcon from '@mui/icons-material/Info'
import ContactMailIcon from '@mui/icons-material/ContactMail'

const PAGES = ['Home', 'Services', 'About Us', 'Contact Us']

const ICONS = [<HomeIcon />, <WorkIcon />, <InfoIcon />, <ContactMailIcon />]

const SideDrawer = () => {
  const [openDrawer, setopenDrawer] = useState(false)

  return (
    <React.Fragment>
      <Drawer
        variant="temporary"
        open={openDrawer}
        onClose={() => setopenDrawer(false)}
        sx={{ width: '900' }}
      >
        <Box
          p={2}
          textAlign="center"
          role="presentation"
          style={{ backgroundColor: '#2e2e2e', height: '100vh' }}
        >
          <List style={{ width: '50vw' }}>
            {PAGES.map((page, index) => (
              <ListItemButton key={index} onClick={() => setopenDrawer(false)}>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  {/* {index % 4 === 0 ? (
                  <HomeIcon />
                ) : (
                  <WorkIcon />
                )} */}

                  {ICONS[index]}
                  <ListItemText sx={{ textTransform: 'uppercase' }}>
                    {page}
                    <Divider component="li" variant="fullWidth" />
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
      <IconButton
        sx={{ color: 'black', marginLeft: 'auto' }}
        onClick={() => setopenDrawer(!openDrawer)}
      >
        <SortIcon style={{ fontSize: '2rem' }} />
      </IconButton>
    </React.Fragment>
  )
}

export default SideDrawer
