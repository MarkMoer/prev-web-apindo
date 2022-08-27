import { Carousel, Button } from 'react-bootstrap';
import gb1 from '../img/gb1.jpg';
import gb2 from '../img/gb2.jpg';
import gb3 from '../img/gb3.jpg';
import React from 'react'

const CarouselLay = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    src={gb1}
                    className="d-block vw-100 vh-100"
                    alt="First slide"
                    style={{ opacity: 0.5 }}
                />
                <Carousel.Caption>
                    <h1>Selamat Datang di
                    </h1>
                    <h1>Website Apindo Gresik
                    </h1>

                    <Button className='shadow-lg'>Selengkapnya</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block vw-100 vh-100"
                    src={gb2}
                    alt="Second slide"
                    style={{ opacity: 0.5 }}
                />

                <Carousel.Caption>
                    <h1>Lorem ipsum dolor sit amet.
                    </h1>
                    <h1>consectetur adipisicing elit. Ipsa, dolore?
                    </h1>
                    <Button className='shadow-lg'>Selengkapnya</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block vw-100 vh-100"
                    src={gb3}
                    alt="Third slide"
                    style={{ opacity: 0.5 }}
                />

                <Carousel.Caption>
                    <h1>Lorem ipsum dolor sit amet.
                    </h1>
                    <h1>consectetur adipisicing elit. Ipsa, dolore?
                    </h1>
                    <Button className='shadow-lg'>Selengkapnya</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselLay