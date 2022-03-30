import { Component } from "react";
import { translate } from "react-i18next";
import AllConstant from "../helpers/AllConstant";

class OurDirector extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }
    
    componentDidMount() {
        fetch(AllConstant.API_BASE_URL+"/api/directeurs")
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.directeurs
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
            return <div  className="text-center">Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="text-center">Chargement…</div>;
        } else {
            return(          
                <section className="container our_directors">
                    <h6>Ici les informations sur </h6>
                    <h3>NOS DIRECTEURS</h3>
                    <div className="row directors">
                        { items.map(item => (
                            <div  key={item.directeurId} className="col-lg-3 col-md-6 director">
                                <img src={AllConstant.API_BASE_URL+"/"+item.directeurImage} alt="" />
                                <i className="uil uil-facebook-f director_icon"></i>
                                <h4>{item.directeurName}</h4>
                                <h6>{item.directeurCountry}</h6>
                            </div>
                        ))}
                    </div>
                </section>
            );
        }
    }
}

export default translate()(OurDirector);