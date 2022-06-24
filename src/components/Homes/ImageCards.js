import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// TEST ---------------------
const imgSX = {
  border: '1px solid red',
  '&:hover': {},
}
// -------------------------
export default function ImageCards({ services }) {
  return (
    <Card
      sx={{ maxWidth: 645 }}
      style={{
        background: 'rgba(0,0,0,0.5)',
        margin: '20px',
        flexGrow: 1,
        flexShrink: 1,
      }}
    >
      <CardMedia
        sx={imgSX}
        component="img"
        height="440"
        image={services.imageUrl}
        alt={services.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{ fontWeight: 'Bold ', fontSize: '2rem', color: '#fff' }}
        >
          {services.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ color: '#ddd' }}
        >
          {services.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
