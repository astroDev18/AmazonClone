import React from 'react';
import "./Home.css"
import Product from './Product'
import Image from './img/book.jpg';

function Home() {
    return <div className="home">
        <div className="home__container">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=''
            />

            <div className="home__row">
                <Product title='The Lean Startup'
                         price={29.99}
                         image={Image}
                         rating={3}
                />
                <Product
                    id="12345"
                    title='PS5 Controller'
                    price={59.99}
                    image={'https://m.media-amazon.com/images/I/71y+UGuJl5L._AC_UY327_FMwebp_QL65_.jpg'}
                    rating={4}
                />
                {/*{ Product }*/}
            </div>

            <div className="home__row">
                <Product
                    id="12345"
                    title='SAMSUNG QN32Q50RAFXZA Flat 32" QLED 4K 32Q50 Series Smart TV'
                    price={497.99}
                    image={'https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UY327_FMwebp_QL65_.jpg'}
                    rating={4}
                />
                <Product
                    id="12345"
                    title='HyperX Cloud II - Gaming Headset, 7.1 Surround Sound, Memory Foam Ear Pads, Durable Aluminum Frame, Detachable Microphone, Works with PC, PS4, Xbox One - Red'
                    price={99.99}
                    image={'https://m.media-amazon.com/images/I/61JJl260NlL._AC_UY327_FMwebp_QL65_.jpg'}
                    rating={5}
                />
                <Product
                    id="12345"
                    title='GoPro HERO7 Black - E-Commerce Packaging - Waterproof Digital Action Camera with Touch Screen 4K HD Video 12MP Photos Live Streaming Stabilization'
                    price={229.99}
                    image={'https://m.media-amazon.com/images/I/61ZUZcb0YiL._AC_UY327_FMwebp_QL65_.jpg'}
                    rating={5}
                />
            </div>

            <div className="home__row">
                <Product
                    id="12345"
                    title='New Apple iPhone 12 Pro (512GB, Gold) [Locked] + Carrier Subscription'
                    price={999.99}
                    image={'https://m.media-amazon.com/images/I/71cSV-RTBSL._AC_UY327_FMwebp_QL65_.jpg'}
                    rating={5}
                />
            </div>
        </div>
    </div>
}

export default Home;
