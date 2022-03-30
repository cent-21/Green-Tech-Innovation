import React, { Component } from "react";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumb";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import AllConstant from "../helpers/AllConstant";
import { Seo } from "../helpers/Seo";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }
    
    componentDidMount() {
        Seo({
            title: 'Nos réalisations > GREEN TECH INNOVATION',
            metaDescription: 'Visitez nos différentes réalisations.'
        });

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
            return (
                <div>
                    <Nav />

                    <Breadcrumb way="Accueil > Réalisations" />

                    <div className="py-5" style={{ backgroundImage: "url('/images/project_top.png')", backgroundSize: "cover" }}>
                        <h5 className="py-5 text-white fw-bold text-center">NOS REALISATIONS</h5>
                    </div>

                    <div  className="text-center py-5">Erreur : {error.message}</div>
                    <Footer />
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div>
                    <Nav />

                    <Breadcrumb way="Accueil > Réalisations" />

                    <div className="py-5" style={{ backgroundImage: "url('/images/project_top.png')", backgroundSize: "cover" }}>
                        <h5 className="py-5 text-white fw-bold text-center">NOS REALISATIONS</h5>
                    </div>

                    <div className="text-center py-5">Chargement…</div>
                    <Footer />
                </div>
            );
        } else {
            return (
                <div>
                    <Nav />

                    <Breadcrumb way="Accueil > Réalisations" />

                    <div className="py-5" style={{ backgroundImage: "url('/images/project_top.png')", backgroundSize: "cover" }}>
                        <h5 className="py-5 text-white fw-bold text-center">NOS REALISATIONS</h5>
                    </div>

                    <section className=" text-center">
                        <div className="projects-1">
                            <h5 className="text-black text-center">Nos clients nous confient de nombreux projets</h5>

                            <div className="col-md-11 col-lg-10 mx-auto row"  style={{ padding:"25px" }}>

                                {items.map((item, index) =>(
                                    <div key={item.reazisationId} className="col-lg-3 col-md-4 col-sm-6 project-item-1">
                                        <img src="/images/airbnb_100px.png" className="rounded" alt="" />
                                        <div className="detail  shadow-sm rounded">
                                            <div className="project_number">{index+1}</div>
                                            <h5 className="text-center"><a href={ item.reazisationLink } target="_blank">{ item.reazisationName }</a></h5> <br />
                                            <p className="text-center">{ item.reazisationDetail.substring(0, 100) }</p>
                                            <Link to={'/project/'+item.reazisationId} className="view_project"><p>Voir le projet <i className="uil uil-angle-double-right"></i></p> </Link>
                                        </div>
                                    </div>
                                ))}

                            
                            </div>
                            
                            
                        </div>
                    </section>
                    <Footer />
                </div>
            );
        }
    }
}

export default translate()(Projects);