// import { Container } from "react-bootstrap";
import "../css/landingPage.css"
import Anggota from "./Anggota";
import CarouselLay from "./carousel.layout";
import Kontak from "./Kontak";
import Media from "./Media";
import Navigation from './navigation.layout';
import Tentang from "./Tentang";
import React, { useRef} from "react";
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
                <CarouselLay />
            </section>
            <section className="jumbotron" ref={tentangRef}>
                <Tentang />
            </section>
            <section className="jumbotron" ref={anggotaRef}>
                <Anggota />
            </section>
            <section className="jumbotron" ref={mediaRef}>
                <Media />
            </section>
            <section className="jumbotron" ref={kontakRef}>
                <Kontak />

            </section>
            <Footer />
        </React.Fragment>
    );
}

export default Beranda;