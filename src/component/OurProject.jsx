import { Component } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

import AllConstant from "../helpers/AllConstant";

import { translate } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


class OurProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }

    
    
    componentDidMount() {
        fetch(AllConstant.API_BASE_URL+"/api/projects")
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                isLoaded: true,
                items: result.projects
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
            return <div  className="text-center">Chargement…</div>;
        } else {
            return (
                <section className="our_project text-center">             
                <h6>NOTRE PROJET RÉCENT</h6>

                <div className="divider my-3"></div>
                <div className="projects">
                    <h5 className="text-black text-center">Nos clients nous confient de nombreux projets</h5>

                    <Swiper className="swiper" style={{ padding:"25px" }}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        breakpoints={{
                            // when window width is >= 500px
                            500: {
                                width: 500,
                                slidesPerView: 1,
                              },
                            640: {
                              width: 640,
                              slidesPerView: 2,
                            },
                            // when window width is >= 768px
                            768: {
                              width: 768,
                              slidesPerView: 3,
                            },
                            // when window width is >= 992px
                            992: {
                              width: 992,
                              slidesPerView: 4,
                            },
                            // when window width is >= 1100px
                            1100: {
                              width: 1100,
                              slidesPerView: 5,
                            },
                            // when window width is >= 1200px
                            1200: {
                              width: 1200,
                              slidesPerView: 5,
                            },
                          }}
                    >
                        {items.map((item, index) => (
                             (index < 11) && 
                            <SwiperSlide key={item.reazisationId} className="swiper-slide project-item">
                                <img src="images/airbnb_100px.png" alt="" />
                                <div className="detail">
                                    <div className="project_number">{index+1}</div>
                                    <h5 className="text-center"><a target="_blank" href={ item.reazisationLink }>{ item.reazisationName }</a></h5> <br />
                                    <p className="text-center">{ item.reazisationDetail.substring(0, 100) }</p>
                                    <Link to={'/project/'+item.reazisationId} className="view_project"><p>Voir le projet <i className="uil uil-angle-double-right"></i></p> </Link>
                                </div>
                            </SwiperSlide>
                            
                        ))}
                    </Swiper>
                    <div className="mt-3"></div>
                    <Link to="/projects"><span className="show_all">Tout voir</span></Link>
                </div>
                </section>
            );
        }
    }
}

export default translate()(OurProject)