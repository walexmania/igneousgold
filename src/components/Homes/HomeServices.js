import React from 'react'
import ImageCards from './ImageCards'

const services = [
  {
    title: 'Architectural Design',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    imageUrl:
      process.env.PUBLIC_URL + '/assets/images/cardservices/card-project.jpg',
  },
  {
    title: 'Building Construction',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    imageUrl:
      process.env.PUBLIC_URL + '/assets/images/cardservices/card-project5.jpg',
  },
  {
    title: 'Interior Design',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    imageUrl:
      process.env.PUBLIC_URL + '/assets/images/cardservices/card-project.jpg',
  },
  {
    title: 'Facility Management',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    imageUrl: process.env.PUBLIC_URL + '/assets/images/cardservices/design.jpg',
  },
]

const Services = () => {
  return (
    <section>
      <h1 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 6vw, 3rem)' }}>
        OUR <span style={{ color: 'gold' }}>SERVICES</span>
      </h1>
      <div
        style={{
          minheight: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ImageCards services={services[0]} />
        <ImageCards services={services[1]} />
        <ImageCards services={services[2]} />
        <ImageCards services={services[3]} />
      </div>
    </section>
  )
}

export default Services
