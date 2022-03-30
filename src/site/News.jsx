import React, { Component } from "react";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumb";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import AllConstant from "../helpers/AllConstant";
import { Seo } from "../helpers/Seo";

class News extends Component {
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
            title: 'Actualités > GREEN TECH INNOVATION',
            metaDescription: 'Nos récentes actualités, opportinutés, stage d\'emploi'
        });

        fetch(AllConstant.API_BASE_URL+"/api/posts")
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.posts
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
        return (
            <div style={{ backgroundColor: "#F5F5F9" }}>
                <Nav />

                <Breadcrumb way="Accueil > Actualités" />

                <div>
                    <img src="/images/news_top.png" alt="" />
                </div>

                <section >
                    <div className="col-lg-8 col-sm-10 mx-auto">
                        
                        {items.map(item => (

                            <div className="bg-white mt-4 py-4 px-3 rounded">
                                <div className="hstack mb-4">
                                    <img src="/images/post_gti.png" className="rounded-circle border" height={ "50px" } width={ "50px" }  alt="" />
                                    <div className="vstack ms-3">
                                        <h6>GREEN TECH INNOVATION</h6>
                                        <small>{ item.created_at }</small>
                                    </div>
                                </div>

                                <Link to={'/post/'+item.postSlug} className="text-decoration-none text-black fw-bold"><h6 className="postTitle">{item.postTitle}</h6></Link>

                                <p>
                                    {item.postDescription.substr(0, 250)+"..."}
                                </p>
                                
                                {
                                    (item.postImage !== "" || item.postImage !== "null") && 
                                    <img src={AllConstant.API_BASE_URL+"/"+item.postImage} className="rounded" style={{ width: "50%" }} alt="" />
                                }

                                <div className="ms-auto mt-3 text-black fw-bold fs-6 dropup">
                                    <i className="uil uil-share-alt"></i>
                                    <span data-bs-toggle="dropdown" aria-expanded="false">Partager</span>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#"><i className="uil uil-envelope share_link_i"></i> <span className="share_link">Email</span></a></li>
                                        <li><a className="dropdown-item" href="#"><i className="uil uil-whatsapp share_link_i"></i> <span className="share_link">Whatsapp</span></a></li>
                                        <li><a className="dropdown-item" href="#"><i className="uil uil-facebook share_link_i"></i> <span className="share_link">Facebook</span></a></li>
                                    </ul>
                                </div>
                                
                            </div>

                        ))}

                        <div className="mb-4"></div>

                    </div>    
                </section>

                <Footer />
            </div>
        );
    }
}

export default translate()(News);