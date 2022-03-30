import { Component } from "react";
import { Link } from "react-router-dom";

import { translate } from 'react-i18next';

class Nav extends Component {
    componentDidMount() {
        window.onscroll = function() {myFunction()};

        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("fixed-top")
        } else {
            navbar.classList.remove("fixed-top");
        }
        }
    }

    render() {
        return(
            <div> 
                <div className="py-2 text-white  d-none d-lg-block bg-black">
                    <div className="px-4">
                        <div className="hstack">
                            <div>
                            <i className="uil uil-phone fs-5"></i> (+229) <a className="text-white text-decoration-none" href="tel:+229 96 36 64 62">96 36 64 62</a> / <a className="text-white text-decoration-none" href="tel:+229 91 91 07 12">91 91 07 12</a>
                            </div>
                            <div className="ms-auto">
                            <i className="uil uil-envelope fs-5"></i> <a  className="text-white text-decoration-none" href="mailto:gti.info@green-tech-innovation.com">gti.info@green-tech-innovation.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid d-none d-lg-block nav_" id="navbar">
                    <div className="hstack">
                        <div>
                            <Link to="/" id="siteName">GREEN TECH INNOVATION</Link>
                        </div>
                        <div className="ms-auto">
                            <div className="hstack">
                                <div className="nav_item"><Link className="nav_link" to="/">Accueil</Link></div>
                                <div className="nav_item"><Link className="nav_link" to="/services">Services</Link></div>
                                <div className="nav_item"><Link className="nav_link" to="/about">À propos</Link></div>
                                <div className="nav_item"><Link className="nav_link" to="/team">Notre équipe</Link></div>
                                <div className="nav_item"><Link className="nav_link" to="/projects">Réalisations</Link></div>
                                <div className="nav_item"><Link className="nav_link" to="/news">Actualités</Link></div>
                                <div className="nav_item"><Link className="nav_link" to="/contact">Contact</Link></div>
                            </div>
                        </div>
                        <div className="ms-auto d-none d-xl-block">
                            <div className="hstack">
                                <div><a href="https://web.facebook.com/Green-Tech-Innovation-100426902025467/" target="_blank"><i className="uil uil-facebook-f nav_i"></i></a></div>
                                <div className="ms-2"><a href="https://twitter.com/GreenTechInnov4" target="_blank"><i className="uil uil-twitter nav_i"></i></a></div>
                                <div className="ms-2"><a href="https://www.instagram.com/greentechinnovation1/" target='_blank'><i className="uil uil-instagram-alt nav_i"></i></a></div>
                                {/* <div className="ms-2"><a href=""><i className="uil uil-linkedin nav_i"></i></a></div> */}
                            </div>
                        </div>
                    </div>
                </div>

            
                <div className="d-block d-lg-none" style={{ marginTop: "58px" }}></div>
                <div className="d-block d-lg-none fixed-top">
                    <div className="hstack app_bar">
                        <div>
                            <Link to='/' id="siteNameMobile">GREEN TECH INNOVATION</Link>
                        </div>
                        <div className="ms-auto">
                            <i className="uil uil-bars text-white fs-4 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-body"  style={{ backgroundColor: "#00085C" }}>
                            <div>
                            <i className="uil uil-multiply float-end" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                            </div>
                            <div className="vstack">
                                <div className="nav_item_mobile"><Link className="nav_link_mobile" to="/">Accueil</Link></div>
                                <div className="nav_item_mobile"><Link className="nav_link_mobile" to="/services">Services</Link></div>
                                <div className="nav_item_mobile"><Link className="nav_link_mobile" to="/about">À propos</Link></div>
                                <div className="nav_item_mobile"><Link className="nav_link_mobile" to="/team">Notre équipe</Link></div>
                                <div className="nav_item_mobile"><Link className="nav_link_mobile" to="/projects">Réalisations</Link></div>
                                <div className="nav_item_mobile"><Link className="nav_link_mobile" to="/news">Actualités</Link></div>
                                <div className="nav_item_mobile"><Link className="nav_link_mobile" to="/contact">Contact</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}


export default translate()(Nav)