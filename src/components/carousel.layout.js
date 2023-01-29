import { Carousel, Button } from 'react-bootstrap';
import gb1 from '../img/gb1.jpg';
import gb2 from '../img/gb2.jpg';
import gb3 from '../img/gb3.jpg';
import React from 'react'

const CarouselLay = ({ refs }) => {
    const goto = (ref) => {
        window.scrollTo({
            top: ref.offsetTop - 48,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    src={gb1}
                    className="d-block vw-100 vh-100"
                    alt="First slide"
                    style={{ opacity: 0.5 , backgroundSize:'cover' , backgroundPosition:'center', backgroundRepeat:'no-repeat'}}
                />
                <Carousel.Caption>
                    <h1>Selamat Datang di
                    </h1>
                    <h1>Website Apindo Gresik
                    </h1>

                    <Button variant="outline-primary" className='shadow-lg buttons' onClick={() => goto(refs.tentangRef.current)}>Selengkapnya</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block vw-100 vh-100"
                    src={gb2}
                    alt="Second slide"
                    style={{ opacity: 0.5 , backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}
                />

                <Carousel.Caption>
                    <h1>Asosiasi Pengusaha Indonesia
                    </h1>
                    <h2>Bergabunglah Dengan Kami dan Dapatkan Informasi Terkini Seputar Regulasi atau Issue Bisnis
                    </h2>
                    <Button variant="outline-primary" className='shadow-lg' onClick={() => goto(refs.anggotaRef.current)}>Selengkapnya</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block vw-100 vh-100"
                    src={gb3}
                    alt="Third slide"
                    style={{ opacity: 0.5 , backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}
                />

                <Carousel.Caption>
                    <h1>Asosiasi Pengusaha Indonesia
                    </h1>
                    <h2>Organisasi Pengusaha Adalah Organisasi yang Dibentuk untuk Mengatur dan Memajukan Kepentingan Kolektif dari Pengusaha
                    </h2>
                    <Button variant="outline-primary" className='shadow-lg' onClick={() => goto(refs.mediaRef.current)}>Selengkapnya</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselLay