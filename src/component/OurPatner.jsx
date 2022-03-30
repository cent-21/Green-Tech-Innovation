import { Component } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { translate } from "react-i18next";
import AllConstant from "../helpers/AllConstant";

class OurPatner extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }
    
    componentDidMount() {
        fetch(AllConstant.API_BASE_URL+"/api/patners")
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.patners
                });
                },
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div  className="text-center">Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="text-center">Chargement…</div>;
        } else {
            return(
                <section className="container our_patners">
                    <h6 className="text-center section_title">NOS PARTENAIRES</h6>
                    <div className="divider my-3"></div>
                    <div className="row">
                        <Swiper className="swiper mt-4"
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={10}
                            slidesPerView={6}
                            centeredSlides={true}
                            autoplay={true}
                            breakpoints={{
                                // when window width is >= 640px
                                640: {
                                width: 640,
                                slidesPerView: 5,
                                },
                                // when window width is >= 768px
                                1100: {
                                width: 1100,
                                slidesPerView: 6,
                                },
                            }}
                        >
                            {items.map(item => (
                                <SwiperSlide key={item.patnerId} >
                                    <a href={item.patnerLink} title={item.patnerName} target="_blank" className="col-lg-2 col-md-4 col-6 mt-2 patner">
                                        <img src={AllConstant.API_BASE_URL+"/"+item.patnerLogo} alt="" />
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            );
        }
    }
}


export default translate()(OurPatner);