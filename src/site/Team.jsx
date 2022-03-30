import React, { Component } from "react";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumb";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import AllConstant from "../helpers/AllConstant";
import { Seo } from "../helpers/Seo";

class Team extends Component {
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
            title: 'Notre équipe > GREEN TECH INNOVATION',
            metaDescription: 'Recherche, développement, investissement et services...'
        });

        fetch(AllConstant.API_BASE_URL+"/api/teams")
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.teams
                });
                console.log(this.state.items)
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
                
                    <Breadcrumb way="Accueil > Notre équipe" />
                    
                    <div className="py-5" style={{ backgroundImage: "url('/images/project_top.png')", backgroundSize: "cover" }}>
                        <h5 className="py-5 text-white fw-bold text-center">NOTRE EQUIPE</h5>
                    </div>

                    <div  className="text-center py-5">Erreur : {error.message}</div>
                    <Footer />
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div>
                    <Nav />
                
                    <Breadcrumb way="Accueil > Notre équipe" />
                    
                    <div className="py-5" style={{ backgroundImage: "url('/images/project_top.png')", backgroundSize: "cover" }}>
                        <h5 className="py-5 text-white fw-bold text-center">NOTRE EQUIPE</h5>
                    </div>

                    <div className="text-center py-5">Chargement…</div>
                    <Footer />
                </div>
            );
        } else {
            return(
                <div>
                    <Nav />
                
                    <Breadcrumb way="Accueil > Notre équipe" />
                    
                    <div className="py-5" style={{ backgroundImage: "url('/images/project_top.png')", backgroundSize: "cover" }}>
                        <h5 className="py-5 text-white fw-bold text-center">NOTRE EQUIPE</h5>
                    </div>

                        {
                            items.map(item => (
                                <section className="containe our_directors-1">
                                
                                    <h3 className="text-black-blue- text-center">{ item.name }</h3>
                                    <div className="divider my-3"></div>
                                    <div className="row directors">
                                        {item.list.map(team => (
                                            <div className="col-lg-3 col-md-4 col-sm-6 team_member">
                                                <img src={AllConstant.API_BASE_URL+"/"+team.teamImage} alt="" />
                                                <Link className="text-white" to={'/member/'+team.teamId}>
                                                    <h4 className="text-black-">{ team.teamName }</h4>
                                                </Link>
                                                <h6 className="text-black">{ team.teamPost }</h6>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                                
                            ))
                        }

                    <div className="mb-5"></div>
                    <Footer  />
                </div>
            );
        }
    }
}

export default translate()(Team);