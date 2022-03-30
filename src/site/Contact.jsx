import React, { Component } from "react";
import { translate } from "react-i18next";
import Breadcrumb from "../component/Breadcrumb";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import { Seo } from "../helpers/Seo";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            object: "",
            country: "benin",
            message: "",
            successResponse: "",
            errorResponse: "",
            sending: false
        };
        this.handeChange = this.handeChange.bind(this);
        this.handeSubmit = this.handeSubmit.bind(this);
    }

    componentDidMount() {
        Seo({
            title: 'Nous contacter > GREEN TECH INNOVATION',
            metaDescription: 'Découvrez tous les moyens de nous contacter, nous pouvons vous aider, plus d\'informations...'
        });
    }

    handeChange(e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value,
            errorResponse: "",
            successResponse: ""
        });
    }

    handeSubmit = async (e) => {
        e.preventDefault();

        this.setState({
            sending: true
        })

        let myHeaders = new Headers();
        myHeaders.append("Cookie", "PHPSESSID=mpq80tluh25l025v4fu644ilg6");

        let formdata = new FormData();
        formdata.append("name", this.state.name);
        formdata.append("email", this.state.email);
        formdata.append("phone", this.state.phone);
        formdata.append("object", this.state.object);
        formdata.append("country", this.state.country);
        formdata.append("message", this.state.message);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://green-tech-innovation.com/mail/mail1.p2hp", requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.send) {
                    this.setState({
                        name: "",
                        email: "",
                        phone: "",
                        object: "",
                        country: "benin",
                        message: ""
                    })
                    this.setState({
                        successResponse: "Message envoyé avec succès, nous vous répondrons dans de bref delai"
                    })
                } else {
                    this.setState({
                        errorResponse: "Message non envoyé, veuillez réessayer."
                    })
                }
                })
                .catch(error => {
                    this.setState({
                        errorResponse: "Message non envoyé, veuillez réessayer."
                    })
                });        

        this.setState({
            sending: false
        })
    }


    render() {
        const { t } = this.props
        return(
            <div>
                <Nav />

                <Breadcrumb way="Accueil > Contact" />

                <section className="container-fluid" style={{ backgroundColor: "#FFF5E5" }}>
                    <div className="row contacts">
                        
                        <div className="row">
                            
                            <div className="col-lg-3 col-sm-6 mt-4">
                                <div className="">
                                    <i className="uil uil-phone contact__icon"></i>
                                    
                                    <div>
                                        <h3 className="contact__title">Téléphone</h3>
                                        <span className="contact__subtitle">(+229) <a className="text-white text-decoration-none" href="tel:+229 96 36 64 62">96 36 64 62</a> / <a className="text-white text-decoration-none" href="tel:+229 91 91 07 12">91 91 07 12</a></span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-sm-6 mt-4">
                                <div className="">
                                    <i className="uil uil-globe contact__icon"></i>
                                    
                                    <div>
                                        <h3 className="contact__title">Site</h3>
                                        <span className="contact__subtitle"><a  className="text-white text-decoration-none" href="https://green-tech-innovation.com/">www.green-tech-innovation.com</a></span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-sm-6 mt-4">
                                <div className="">
                                    <i className="uil uil-envelope contact__icon"></i>
                                    
                                    <div>
                                        <h3 className="contact__title">Email</h3>
                                        <span className="contact__subtitle"><a  className="text-white text-decoration-none" href="mailto:gti.info@green-tech-innovation.com">gti.info@green-tech-innovation.com</a></span>
                                    </div>
                                </div>
                            </div>                            
                            
                            <div className="col-lg-3 col-sm-6 mt-4">
                                <div className="">
                                    <i className="uil uil-location-point contact__icon"></i>
                                    
                                    <div>
                                        <h3 className="contact__title">Adresse</h3>
                                        <span className="contact__subtitle">BENIN – Abomey-Calavi, immeuble Notarial, En face du Campus UAC</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>   


                    <div className="row">
                         <div className="col-lg-8 col-md-10 col-sm-11 bg-white shadow p-4 mx-auto">

                            <div className="text-center mb-4">
                                <p className="mb-4 text-black-">Travaillons ensemble dès à présent.</p>
                                <h4 className="mb-4 text-black-">Êtes-vous prêt à passer à la vitesse supérieure ?</h4>
                                <p className="mb-2 th-sm text-color">
                                    Concentrez-vous sur votre business. Laissez-nous vous apporter les solutions dont vous avez besoin.
                                </p>
                            </div>


                            <form onSubmit={this.handeSubmit} className="row">
                                
                                { (this.state.errorResponse.length > 0) && 
                                    <div className='alert alert-danger mt-4'>{ this.state.errorResponse }</div>
                                }
                                
                                { (this.state.successResponse.length > 0) && 
                                    <div className='alert alert-success mt-4'>{ this.state.successResponse }</div>
                                }
                                
                                <div className="mt-4 col-md-6">
                                    <label className="mb-2" htmlFor="">Nom et prénom</label>
                                    <input type="text" required value={this.state.name} name="name" id="name" onChange={this.handeChange} className="form-control-"/>
                                </div>
                                <div className="mt-4 col-md-6">
                                    <label className="mb-2" htmlFor="">Email</label>
                                    <input type="email" required value={this.state.email} name="email" id="email" onChange={this.handeChange} className="form-control-" />
                                </div>
                                <div className="mt-4 col-md-6">
                                    <label className="mb-2" htmlFor="">Téléphone (optionnel)</label>
                                    <input type="text" value={this.state.phone} name="phone" id="phone" onChange={this.handeChange} className="form-control-" />
                                </div>
                                <div className="mt-4 col-md-6">
                                    <label className="mb-2" htmlFor="">Quelle direction souhaitez-vous contacter</label>
                                    <select required className="form-control-" value={this.state.country} name="country" id="country" onChange={this.handeChange}>
                                        <option></option>
                                        <option value="benin">{t('benin')}</option>
                                        <option value="burkina"> {t('burkina_faso')} </option>
                                        <option value="liberia"> {t('liberia')} </option>
                                        <option value="senegal"> {t('senegal')} </option>
                                    </select>
                                </div>
                                <div className="mt-4 col-md-12">
                                    <label className="mb-2" htmlFor="">Objet</label>
                                    <input type="text" required value={this.state.object} name="object" id="object" onChange={this.handeChange} className="form-control-" />
                                </div>
                                <div className="mt-4 col-md-12">
                                    <label className="mb-2" htmlFor="">Message</label>
                                    <textarea required className="form-control-" rows="3" value={this.state.message} name="message" id="message" onChange={this.handeChange}></textarea>
                                </div>
                                
                                
                                {!this.state.sending && 
                                    <div className="row">
                                        <div className="col-sm-12 mt-4 text-center">
                                            <input type="submit" className="btn text-white btn-primary-" name="" />
                                        </div>
                                    </div>
                                }
                                
                                {this.state.sending && 
                                    <div className="row mt-4" >
                                        <div className="spinner-border text-primary- mx-auto" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                }
                            </form>
                        </div>    
                    </div> 
                </section>

                <Footer />
            </div>
        );
    }
}

export default translate()(Contact);