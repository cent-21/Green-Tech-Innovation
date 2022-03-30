import { Component } from "react";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";
import AllConstant from "../helpers/AllConstant";

class OurService extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }
    
    componentDidMount() {
        fetch(AllConstant.API_BASE_URL+"/api/services")
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.services
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
            return <div  className="text-center py-5">Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div  className="text-center py-5">Chargement…</div>;
        } else {
            return(
                <section className="container-fluid ourservice">
                    <div className="containe">
                        <div className="row text-center mb-4">
                            <h6>NOS SERVICES</h6>
                            <div className="divider my-3"></div>
                            <h6 className="fw-bold text-black">Des prestations sur mesure</h6>
                        </div>
                        <div className="row">

                            {items.map(item => (
                                <Link to={'/service/'+item.serviceId} key={item.serviceId} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                                    <div >
                                        <div className="ourservice_item rounded text-center">
                                            <div className="first py-5">
                                                <img src={AllConstant.API_BASE_URL+"/"+item.serviceImage} className="ourservice_item_img" alt="" />
                                                <h6 className="mt-4 text-black">{item.serviceName}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}

                        </div>
                    </div>
                </section>
            );
        }
    }
}

export default translate()(OurService);