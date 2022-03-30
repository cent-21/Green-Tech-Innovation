import { Component, useEffect, useState } from "react";
import { translate } from "react-i18next";
import { useParams } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumb";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import AllConstant from "../helpers/AllConstant";


function Post() {
    let { postSlug } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(AllConstant.API_BASE_URL+"/api/post/"+postSlug)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setPost(result.post);
            },
            // Remarque : il faut gérer les erreurs ici plutôt que dans
            // un bloc catch() afin que nous n’avalions pas les exceptions
            // dues à de véritables bugs dans les composants.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])


    if (error) {
        return (
            <div>
                <Nav />
                <div  className="text-center py-5">Erreur : {error.message}</div>
                <Footer />
            </div>
        );
    } else if (!isLoaded) {
        return (
            <div>
                <Nav />
                <div  className="text-center py-5">Chargement</div>
                <Footer />
            </div>
        );
    } else {
        return(
            <div style={{ backgroundColor: "#F5F5F9" }}>
                <Nav />

                <Breadcrumb way={"Accueil > Actualités > "+post.postTitle} />

                <div>
                    <img src="/images/news_top.png" alt="" />
                </div>

                <section className="col-lg-8 col-md-10 mx-auto">
                    <div className="bg-white my-4 py-4 px-3 rounded">
                        <div className="hstack mb-4">
                            <img src="/images/post_gti.png" className="rounded-circle border" height={ "50px" } width={ "50px" }  alt="" />
                            <div className="vstack ms-3">
                                <h6>GREEN TECH INNOVATION</h6>
                                <small>{ post.created_at }</small>
                            </div>
                        </div>

                        <h5 className="text-decoration-none text-black fw-bold"><h6 className="postTitle">{post.postTitle}</h6></h5>

                        <p>
                            {post.postDescription}
                        </p>
                        
                        {
                            (post.postImage !== "" || post.postImage !== "null") && 
                            <img src={AllConstant.API_BASE_URL+"/"+post.postImage} className="rounded" style={{ width: "50%" }} alt="" />
                        }

                        <div className="ms-auto mt-3 text-black fw-bold fs-6 dropup">
                            <i className="uil uil-share-alt me-1"></i>
                            <span data-bs-toggle="dropdown" aria-expanded="false">Partager</span>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#"><i className="uil uil-envelope share_link_i"></i> <span className="share_link">Email</span></a></li>
                                <li><a className="dropdown-item" href="#"><i className="uil uil-whatsapp share_link_i"></i> <span className="share_link">Whatsapp</span></a></li>
                                <li><a className="dropdown-item" href="#"><i className="uil uil-facebook share_link_i"></i> <span className="share_link">Facebook</span></a></li>
                            </ul>
                        </div>
                        
                    </div>
                </section>
               
                <Footer />
            </div>
        );
    }

    
}


export default translate()(Post);