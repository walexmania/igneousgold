import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { Container } from '@mui/system'
import TextField from '@mui/material/TextField/TextField'
import SendIcon from '@mui/icons-material/Send'
import { Map } from '../Maps'

export default function ContactUs() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_mjrffu9',
        'template_5rmsnzw',
        form.current,
        'A-sjtx3NkJx7r9K8s'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('Message Sent')
        },
        (error) => {
          console.log(error.text)
          alert('Error')
        }
      )
  }

  return (
    <React.Fragment>
      <h1 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 6vw, 3rem)' }}>
        CONTACT <span style={{ color: 'gold' }}>US</span>
      </h1>
      <Container
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          gap: '1.5rem',
        }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{ width: '100%' }}
                id="outlined-textarea"
                label="Enter your First Name"
                placeholder="First Name"
                name="first_name"
                multiline
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{ width: '100%' }}
                id="outlined-textarea"
                label="Enter your Last Name"
                placeholder="Last Name"
                name="last_name"
                multiline
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{ width: '100%' }}
                fullWidth={true}
                //   id="fullWidth"
                //   id="outlined-textarea"
                label="Enter your Email"
                placeholder="Email Address"
                multiline
                name="email_address"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth={true}
                id="outlined-multiline-static"
                label="Send us a message........."
                placeholder="Your message"
                name="message"
                multiline
                rows={6}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            style={{
              backgroundColor: '#ffc107',
              marginTop: '10px',
              float: 'right',
            }}
            size="large"
            variant="contained"
            endIcon={<SendIcon />}
          >
            SEND
          </Button>
        </form>
        <Box>
          <h1>Hello</h1>
          <Map style={{ border: '2px solid red' }} />
        </Box>
      </Container>
    </React.Fragment>
  )
}
