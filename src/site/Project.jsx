import { Component, useEffect, useState } from "react";
import { translate } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumb";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import AllConstant from "../helpers/AllConstant";


function Project() {
    let { projectId } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch(AllConstant.API_BASE_URL+"/api/project/"+projectId)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setProject(result.project);
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
            <div>
                <Nav />                

                <Breadcrumb way={'Accueil > Réalisations > '+project.reazisationName} />

                <div className="py-5" style={{ backgroundImage: "url('/images/project_top.png')" }}>
                    <h5 className="py-5 text-white fw-bold text-center">NOS REALISATIONS</h5>
                </div>

                <div className="single_project">
                    
                    <div className="container d-none d-lg-block">
                        <Link to={'/projects'} className="btn btn-outline-secondary mt-4"  onclick="history.back()"><i class="uil uil-arrow-left"></i> Retour</Link>
                        
                        <div className="hstack p-5">
                            <div  style={{ position: "absolute", height:"200px", width: "200px", marginRight: "150px" }}>
                                <img src="/images/project_left.png" alt="" />
                            </div>
                            <div className="bg-white w-100 p-5" style={{ marginLeft: "100px"}}>
                                <div style={{ marginLeft: "100px" }}>
                                    <h5 className="my-2 text-center text-black">{project.reazisationName}</h5>
                                    <div className="divider my-3 "></div>
                                    <p>{project.reazisationDetail}</p>     
                                    <a href={ project.reazisationLink } target="_blank" className="text-black fw-bold">Lien vers le projet</a>
                                </div>
                            </div>
                        </div>
                    </div>    

                    <div className="d-block d-lg-none">

                        <Link to={'/projects'} className="btn btn-outline-secondary ms-4 my-4"  onclick="history.back()"><i class="uil uil-arrow-left"></i> Retour</Link>
                        
                        <div className="bg-white p-5">
                            <h5 className="my-2 text-center text-black">{project.reazisationName}</h5>
                            <div className="divider my-3 "></div>
                            <p>{project.reazisationDetail}</p>    
                        </div>
                    </div>                
                </div>

                <Footer />
            </div>
        );
    }

    
}


export default translate()(Project);