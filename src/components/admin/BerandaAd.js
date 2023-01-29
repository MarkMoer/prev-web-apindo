import React from 'react'
import { Container } from 'react-bootstrap'

const BerandaAd = (props) => {
  return (
    <Container className='mt-5 adminWrapper'>
        <h1 className='dash-admin'>Selamat Datang di</h1>
        <h1 className='dash-admin'>Dashboard Admin "{props.name}"</h1>
    </Container>
  )
}

export default BerandaAd