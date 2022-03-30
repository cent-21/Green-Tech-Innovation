import { useEffect, useState } from "react";
import { translate } from "react-i18next";
import { useParams } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumb";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import AllConstant from "../helpers/AllConstant";


function Member() {
    let { teamId } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [team, setTeam] = useState({});

    useEffect(() => {
        fetch(AllConstant.API_BASE_URL+"/api/team/"+teamId)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setTeam(result.team);
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

                    <Breadcrumb way= {'Accueil > Notre Equipe > '+team.teamName} />
                    <section className="container py-5">
                        <h6>Accueil <i class="uil uil-angle-right"></i> Membre <i class="uil uil-angle-right"></i> {team.teamName}</h6>
                        <hr className="my-3" />
                        <div className="row">
                            <div className="col-lg-6 text-center mt-4">
                                <img src={AllConstant.API_BASE_URL+"/"+team.teamImage} alt="" style={{ maxHeight: "300px" }} />
                            </div>
                            <div className="col-lg-6 shadow mt-4 p-5" style={{ position: "relative" }}>
                                <h3 className="text-center text-black fw-bold">{team.teamName}</h3>
                                <p className="text-center text-black">{team.teamPost}</p>
                                <div className="divider my-4"></div>
                                <p className="text-center text-black">{team.teamDetail}</p>
                                <div className="row px-4 mt-4 member_link">
                                    <a href={"mailto:"+team.teamMail} className="col-lg-5 mt-3 text-center btn btn-outline-primary mx-auto">Email</a>
                                    <a href={"tel:"+team.teamTel} className="col-lg-5 mt-3 text-center btn btn-outline-primary mx-auto">Téléphone</a>
                                </div>
                            </div>
                        </div>
                    </section>
                <Footer />
            </div>
        );
    }

    
}


export default translate()(Member);