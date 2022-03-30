import { Component } from "react";
import { Seo } from "../helpers/Seo";
import Nav from "../component/Nav";

import { translate } from 'react-i18next';
import Header from "../component/Header";
import Footer from "../component/Footer";
import OurProject from "../component/OurProject";
import OurService from "../component/OurService";
import { Link } from "react-router-dom";


// Import Swiper styles
import 'swiper/css';
import OurDirector from "../component/OurDirector";
import OurPatner from "../component/OurPatner";
import Entreprise from "../component/Entreprise";

class Home extends Component {
    componentDidMount() {
        Seo({
            title: 'GREEN TECH INNOVATION',
            metaDescription: 'Nous offrons des solutions pour une bonne gestion des exploitations agricoles:, familiales, une garantie de la sécurité alimentaire et la durabilité de l\'environnement.'
        });
    }

    render() {
        const { t } = this.props
        return(
            <div>
                <Nav />
                <Header />

                <section className="container-fluid header_bottom">
                    <div className="container">
                        <div className="col-lg-8 mx-auto">
                            <div className="row">
                                <div className="col-lg-8 mt-4 text-white">
                                    <b>GREEN TECH INNOVATION</b> est toujours disponible pour tous 
                                </div>
                                <div className="col-lg-4 my-4">
                                    <Link to="/contact" className="btn-outline-white-orange- text-decoration-none">TRAVAILLEZ AVEC NOUS</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-sm-12 mx-auto our_company">
                                <div>
                                    <div className="col-lg-6 col-sm-12">
                                        <span className="our_company_title text-white-">NOTRE ENTREPRISE</span>
                                        <div className="bg-primary-" style={{ height: "2px", marginTop: "2px" }}></div>
                                    </div>
                                </div>
                                <div className="bg-light-primary- our_company_content shadow-sm">
                                    <div className="row">
                                        <div className="row mx-auto">
                                            <h6 className="text-black fw-bold fs-5" style={{ textAlign: "" }}>
                                            Green Tech Innovation existe pour une croissance durable en Afrique à travers la promotion de l'investissement, de l'innovation et des services technologiques dans les secteurs productifs.
                                            </h6>
                                            <p className="text-black">
                                            Nous sommes des innovateurs dans le monde agricole. Nous proposons des solutions pour une bonne gestion des exploitations familiales, garantissant la sécurité alimentaire et la durabilité environnementale.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container-fluid work_together">
                    <div className="container">
                        <div className="col-lg-7 text-center mx-auto">
                            <div className="row pb-1">
                                <div className="col-lg-6 mt-3 text-white">
                                    <h5>Passez à la vitesse maximale.</h5> 
                                </div>
                                <div className="col-lg-6 my-3">
                                    <Link to="/contact" className="btn-outline-white-primary- text-decoration-none">Contactez-nous</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <Entreprise />

                <OurService />

                <OurProject />

                <OurDirector />

                <OurPatner />

                <Footer />

            </div>
        );
    }
}

export default translate()(Home)