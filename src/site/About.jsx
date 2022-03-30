import React, { Component } from "react";
import { translate } from "react-i18next";
import Breadcrumb from "../component/Breadcrumb";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import { Seo } from "../helpers/Seo";

class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Seo({
            title: 'À propos > GREEN TECH INNOVATION',
            metaDescription: 'Green Tech Innovation Sarl est une société béninoise créée le 24 septembre 2020...'
        });
    }

    render() {
        const { t } = this.props
        return (
            <div>
                <Nav />

                <Breadcrumb way="Accueil > À propos" />

                <img src="/images/about_us.png" style={{ height: "200px", width: "100%", width: "100%", objectFit: "cover" }} alt="" />

                <div className="col-lg-10 col-md-12 d-none d-md-block mx-auto">
                    <div className="row about_items">
                        <a href="#creation" className="col active about_item">
                            Création
                        </a>
                        <a href="#why" className="col about_item">
                            Pourquoi nous existons ?
                        </a>
                        <a href="#mission" className="col about_item">
                            Notre mission
                        </a>
                        <a href="#vision" className="col about_item">
                            Notre vision
                        </a>
                        <a href="#values" className="col about_item">
                            Nos valeurs
                        </a>
                    </div>

                </div>    

                <div className="about_part" id="creation">
                    <h3>Creation</h3>
                    <div className="about_divider"></div>
                    <div className="col-lg-7 col-md-9 col-11 mx-auto">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-4 mb-2 mx-auto">
                                <img src="images/logo.png" alt="" />
                            </div>
                            <div className="col-lg-8">
                                <p>
                                Green Tech Innovation Sarl est une société béninoise créée le 24 septembre 2020 et régie par les dispositions de l'Acte Uniforme Révisé de l'OHADA relatif au droit des sociétés commerciales et du groupement d'intérêt économique et par toutes autres dispositions légales et réglementaires en vigueur au Bénin.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about_part" id="why">
                    <div className="col-lg-11 col-md-10 col-11 mx-auto">
                        <h3>{t('about_why')}</h3>
                        <div className="about_divider"></div>
                        <div className="row">
                            <div className="col-lg-6">
                                <p>
                                    { t('about_why_description') }
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <img src="images/why_do_we.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row about_part" id="mission" style={{ backgroundImage: "url('images/our_mission_back.png')" }}>
                    <div className="col-md-11 mx-auto">
                        <div className="row p-4 py-5">
                            <div className="col-lg-4 col-md-5">
                                <h5 className="text-white fs-1">{t('about_mission')}</h5>
                            </div>
                            <div className="col-lg-8 col-md-7">
                                <p className="text-white">
                                    {t('about_mission_description')}
                                </p>
                            </div>
                        </div>
                    </div>                       
                </div>

                <div className="row about_vision" id="vision" style={{ backgroundImage: "url('images/our_visison.png')", backgroundSize: "cover" }}>
                    <div className="col-md-4 col-sm-6 offset-sm-1 p-5 bg-white rounded our_vision">
                        <h3>{t('about_vision')}</h3>
                        <p> 
                            {t('about_vision_description')}
                        </p>
                    </div>
                </div>
                
                
                <div className="containe mt-5" id="values">
                    <div className="row">
                        <div className="mb-5">
                            <h4 className="text-center text-black">{t('our_values')}</h4>
                            <div className="divider"></div>
                            <div className="row text-center">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12 mx-auto">
                                    <div className="trophee_item">
                                        <i className="uil uil-trophy trophee_icon"></i>
                                        <br/>
                                        {t('our_values_one')}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12 mx-auto">
                                    <div className="trophee_item">
                                        <i className="uil uil-trophy trophee_icon"></i>
                                        <br/>
                                        {t('our_values_two')}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12 mx-auto">
                                    <div className="trophee_item">
                                        <i className="uil uil-trophy trophee_icon"></i>
                                        <br/>
                                        {t('our_values_three')}
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 mx-auto">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="trophee_item">
                                                <i className="uil uil-trophy trophee_icon"></i>
                                                <br/>
                                                {t('our_values_four')}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="trophee_item">
                                                <i className="uil uil-trophy trophee_icon"></i>
                                                <br/>
                                                {t('our_values_five')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default translate()(About);