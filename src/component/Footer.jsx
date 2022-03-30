import { Component } from "react";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";
import Newsetter from "./Newsetter";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state= {
            year: 0
        }
    }

    componentDidMount() {
        const d = new Date();
        let year = d.getFullYear();
        this.setState({
            year: year,
        })
    }

    render() {
        return(
            <div>
                <footer className="row footer">
                    <div className="container">
                        <div className="row p-4">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-4 my-auto text-center">
                                        <img src="/images/logo.png" alt="" className="greenLogo mb-4 mt-0" />
                                    </div>
                                    <div className="col-md-8">
                                        <p className="p-0">
                                        Green Tech Innovation Sarl est une société béninoise créée le 24 septembre 2020 et régie par les dispositions de l'Acte Uniforme Révisé de l'OHADA relatif au droit des sociétés commerciales et du groupement d'intérêt économique et par toutes autres dispositions légales et réglementaires en vigueur au Bénin.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="row">
                                    <div className="col-md-4 col-6">
                                        <dl>
                                            <dt>LA SOCIÉTÉ</dt>
                                            <dd><Link to="/about">About</Link></dd>
                                            <dd><Link to="/team">Our Team</Link></dd>
                                            <dd><Link to="/services">Service</Link></dd>
                                            <dd><Link to="/contact">Contact Us</Link></dd>
                                        </dl>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <dl>
                                            <dt>SUIVEZ-NOUS</dt>
                                            <dd><a href="https://web.facebook.com/Green-Tech-Innovation-100426902025467/" target="_blank"><i className="uil uil-facebook-f me-2"></i>Facebook</a></dd>
                                            <dd><a href="https://www.instagram.com/greentechinnovation1/" target="_blank"><i className="uil uil-instagram me-2"></i>Instagram</a></dd>
                                            <dd><a href="https://twitter.com/GreenTechInnov4" target="_blank"><i className="uil uil-twitter me-2"></i>Twitter</a></dd>
                                            {/* <dd><i className="uil uil-linkedin-alt me-2"></i>Linkedin</dd> */}
                                        </dl>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <dl>
                                            <dt>LANGUE</dt>
                                            <img src="/images/language.png" alt="" className="language_img" />
                                        </dl>
                                    
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-8 col-sm-8 mx-auto">
                                    <Newsetter  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center my-2">
                        <small style={{ fontStyle: "italic" }}>Copyright &copy; { this.state.year } Green Tech Innovation. All rights reserved</small>
                    </div>
                </footer>
                <a href="https://api.whatsapp.com/send?phone=+22996366462" className="floating d-none" target="_blank">
                    <i className="uil uil-whatsapp"></i>
                </a>
            </div>
        );
    }
}

export default translate()(Footer);