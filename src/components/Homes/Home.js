import { Box, Collapse, Container, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HomeImage from '../../assets/images/bg.jpg'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

const Home = () => {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(true)
  }, [])

  return (
    <Box
      id="headerscroll"
      style={{
        backgroundColor: '#fefefe',
        height: '100vh',
        backgroundImage: `url(${HomeImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        // backgroundPositionY: 'left center',
        backgroundSize: 'cover',
      }}
    >
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
          fontSize: '2rem',
        }}
      >
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          //   collapsedHeight={50}
        >
          <div>
            <h1 style={{ fontSize: '3rem' }}>BUIDING THE DREAM.</h1>
            <IconButton style={{ marginTop: '7rem' }}>
              <ArrowDownwardIcon style={{ color: 'gold', fontSize: '4rem' }} />
            </IconButton>
          </div>
        </Collapse>
      </Container>
    </Box>
  )
}

export default Home
