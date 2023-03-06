// import { Container } from "react-bootstrap";
import "../css/landingPage.css"
import Anggota from "./Anggota";
import CarouselLay from "./carousel.layout";
import Kontak from "./Kontak";
import Media from "./Media";
import Navigation from './navigation.layout';
import Tentang from "./Tentang";
import React, { useRef } from "react";
import Footer from "./Footer";
// import { useEffect, useState} from 'react'

const Beranda = () => {
    const berandaRef = useRef(null)
    const tentangRef = useRef(null)
    const anggotaRef = useRef(null)
    const mediaRef = useRef(null)
    const kontakRef = useRef(null)

    // const [offset, setOffset] = useState(0);

    // useEffect(() => {
    //     const onScroll = () => setOffset(window.pageYOffset);
    //     // clean up code
    //     window.removeEventListener('scroll', onScroll);
    //     window.addEventListener('scroll', onScroll, { passive: true });
    //     return () => window.removeEventListener('scroll', onScroll);
    // }, []);

    // console.log(offset); 

    return (
        <React.Fragment>
            <section id="beranda" ref={berandaRef}>
                <Navigation refs={{ berandaRef, tentangRef, anggotaRef, mediaRef, kontakRef }} />
                <CarouselLay refs={{tentangRef, anggotaRef, mediaRef }} />
            </section>
            <section className="jumbotron-tentang" ref={tentangRef}>
                <div data-aos="fade-up"
                    data-aos-duration="2500">
                    <Tentang />
                </div>
            </section>
            <section className="jumbotron-anggota" ref={anggotaRef}>
                <div data-aos="fade-up"
                    data-aos-duration="2500">
                    <Anggota />
                </div>
            </section>
            <section className="jumbotron-media" ref={mediaRef}>
                <div data-aos="fade-up"
                    data-aos-duration="2500">
                    <Media />
                </div>
            </section>
            <section className="jumbotron" ref={kontakRef}>
                <div data-aos="fade-up"
                    data-aos-duration="2500">
                    <Kontak />
                </div>

            </section>
            <Footer />
        </React.Fragment>
    );
}

export default Beranda;