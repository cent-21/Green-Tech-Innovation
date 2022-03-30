import { Component, useEffect, useState } from "react";
import { translate } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumb";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import AllConstant from "../helpers/AllConstant";


function Service() {
    let { serviceId } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(AllConstant.API_BASE_URL+"/api/service/"+serviceId)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setService(result.service);
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
        let list = [];
        if(service.serviceList) {
            list = service.serviceList.split(";")
        }
        return(
            <div>
                <Nav />                

                <Breadcrumb way="Accueil > Services > " />

                <div className="py-2" style={{ backgroundImage: "url('/images/service_top.png')" }}>
                    <h5 className="py-5 text-white fw-bold text-center">SERVICE</h5>
                </div>

                <div className="containe">
                    
                    <Link to={'/services'} className="btn btn-outline-secondary mt-4"  onclick="history.back()"><i class="uil uil-arrow-left"></i> Retour</Link>

                    <div className="row single_service">
                        <div className="col-md-6 p-0">
                            <img src={AllConstant.API_BASE_URL+"/"+service.serviceImage} className="col-lg-6" alt="" />
                        </div>
                        <div className="col-md-6 py-3">
                            <div className="col-sm-10 mx-auto">
                                <h5 className="my-3 text-black">{service.serviceName}</h5>
                                {list.map((item, index) => (
                                    (item.length > 0) &&
                                    <div className="hstack service_sub">
                                        <i class="uil uil-check-circle pb-3 me-2"></i>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                    
                <Footer />
            </div>
        );
    }

    
}


export default translate()(Service);