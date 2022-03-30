import { Component } from "react";
import { translate } from "react-i18next";
import Breadcrumb from "../component/Breadcrumb";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import OurService from "../component/OurService";
import { Seo } from "../helpers/Seo";

class Services extends Component {
    componentDidMount() {
        Seo({
            title: 'Service > GREEN TECH INNOVATION',
            metaDescription: 'Etudes statistiques et informatiques - Commerce général - Economie bleue et verte'
        });
    }
    render() {
        return(
            <div>
                <Nav />                

                <Breadcrumb way="Accueil > Services" />

                <div className="py-3" style={{ backgroundImage: "url('/images/service_top.png')", backgroundSize: "cover" }}>
                    <h5 className="py-5 text-white fw-bold text-center">SERVICE</h5>
                </div>
                <OurService />
                <Footer />
            </div>
        );
    }
}

export default translate()(Services);