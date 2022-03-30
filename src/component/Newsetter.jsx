import React, { Component } from "react";
import { translate } from "react-i18next";
import AllConstant from "../helpers/AllConstant";

class Newsetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            successResponse: "",
            errorResponse: "",
            sending: false
        };
        this.handeChange = this.handeChange.bind(this);
        this.handeSubmit = this.handeSubmit.bind(this);
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

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch(AllConstant.API_BASE_URL+"/api/add_newsletter", requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.save) {
                    this.setState({
                        name: "",
                        email: "",
                        sending: false,
                        successResponse: "Merci de vous être abonné."
                    })
                } else {
                    this.setState({
                        sending: false,
                        errorResponse: "Merci mais vous vous êtes déjà abonné."
                    })
                }
                })
                .catch(error => {
                    this.setState({
                        sending: false,
                        errorResponse: "Nous n'arrivons pas à vous abonner, veuillez réesayer plus tard. Merci."
                    })
                });        

        
    }


    render() {
        const { t } = this.props
        const { sending, successResponse, errorResponse, name, email } = this.state;
        return(
            <div>
                <form onSubmit={this.handeSubmit} className="row">
                                
                    { (successResponse.length > 0) && 
                        <div className='text-white mt-4'>{ successResponse }</div>
                    }
                    { (errorResponse.length > 0) && 
                        <div className=' p-2 bg-white text-danger'>{ errorResponse }</div>
                    }
                    
                    {!sending && 
                        <div className="col-md-4 p-0 d-none">
                            <input type="submit" className="btn btn-primary- text-white" name="" />
                        </div>
                    }

                    <div className="input-group p-0 mb-3 mt-4">
                        <input type="email" className="form-control bg-black-blue- text-white" required value={email} onChange={this.handeChange} name="email" id="email" placeholder="Envoyez votre mail" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <input type="submit" className="btn btn-primary- text-white" name="" id="button-addon2" />
                    </div>
                    
                    {sending && 
                        <div className="col-12 text-center" >
                            <div className="spinner-border text-primary-  text-center mx-auto" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }

                </form>

            </div>
        );
    }
}

export default translate()(Newsetter);