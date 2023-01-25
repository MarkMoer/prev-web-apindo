import React from 'react'
import { Container } from 'react-bootstrap'

const BerandaAd = (props) => {
  return (
    <Container className='mt-5 adminWrapper'>
        <h1 className='dash-admin'>Selamat Datang {props.name}</h1>
    </Container>
  )
}

export default BerandaAd