import { Component } from "react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { translate } from 'react-i18next';

class Header extends Component {
    render() {
        return(
            <div>
                <Swiper className="swiper header bg-secondary d-lg-block d-none"
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={1}
                    centeredSlides={true}
                    navigation
                    slidesPerView={1.5}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}          
                >
                    <SwiperSlide className="swiper-slide slide_one">
                        <div>
                            <h1 className="text-center text-white">Interaction positive avec notre environnement</h1> <br />
                            <p className="text-center text-white fs-5">Nous travaillons en lien avec la nature en utilisant des processus et équilibres écologiques</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide slide_two">
                        <div>
                            <h1 className="text-center text-white">Branché sur le marché</h1> <br />
                            <p className="text-center text-white fs-5">Une gamme de services et de produits désirés par les clients</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide slide_three">
                        <div>
                            <h1 className="text-center text-white">Entreprise cohérente</h1> <br />
                            <p className="text-center text-white fs-5">Tous nos services sont en relation harmonieuse et en dimension ajustée aux besoins des clients</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                
                <Swiper className="swiper header bg-secondary d-lg-none d-block"
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={1}
                    centeredSlides={true}
                    navigation
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}          
                >
                    <SwiperSlide className="swiper-slide slide_one">
                        <div>
                            <h3 className="text-center text-white">Interaction positive avec notre environnement</h3> <br />
                            <p className="text-center text-white">Nous travaillons en lien avec la nature en utilisant des processus et équilibres écologiques</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide slide_two">
                        <div>
                            <h3 className="text-center text-white">Branché sur le marché</h3> <br />
                            <p className="text-center text-white">Une gamme de services et de produits désirés par les clients</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide slide_three">
                        <div>
                            <h3 className="text-center text-white">Entreprise cohérente</h3> <br />
                            <p className="text-center text-white">Tous nos services sont en relation harmonieuse et en dimension ajustée aux besoins des clients</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        );
    }
}

export default translate()(Header)