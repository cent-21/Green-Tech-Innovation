import { Component } from "react";
import { translate } from "react-i18next";

class Entreprise extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list : {
                one: {
                    title: "Investissement",
                    detail: "Investir dans le développement technologique et l'innovation éco-responsable dans l'agriculture écologique, l'agro-industrie, les énergies renouvelables, l'eau, l'environnement, le bâtiment et la résilience au changement climatique."
                },
                two: {
                    title: "Accompagnement",
                    detail: "Soutenir les entreprises et les organisations dans la mise en œuvre de la gestion environnementale, l'utilisation rationnelle de l'eau et de l'énergie et l'intégration des principes, normes et standards liés à l'environnement dans les processus et pratiques de production, de fabrication et de distribution."
                },
                three: {
                    title: "Renforcement et Facilitation",
                    detail: "Renforcer le lien entre science et politique pour une plus grande efficacité des actions publiques dans le développement de l'économie verte."
                }
            },
            text: "Investir dans le développement technologique et l'innovation éco-responsable dans l'agriculture écologique, l'agro-industrie, les énergies renouvelables, l'eau, l'environnement, le bâtiment et la résilience au changement climatique.",
            class1: "row entreprise_dot active",
            class2: "entreprise_dot",
            class3: "entreprise_dot"
        };
        this.setDetail = this.setDetail.bind(this);
    }

    setDetail(idName) {
        if(idName === "one") {
           this.setState({
               class1: "row entreprise_dot active",
               class2: "entreprise_dot",
               class3: "entreprise_dot",
               text: this.state.list.one.detail
            }) 
        } else if(idName === "two") {
            this.setState({
                class1: "row entreprise_dot",
                class2: "entreprise_dot active",
                class3: "entreprise_dot",
                text: this.state.list.two.detail
             }) 
        } else {
            this.setState({
                class1: "row entreprise_dot",
                class2: "entreprise_dot",
                class3: "entreprise_dot  active",
                text: this.state.list.three.detail
             }) 
        }
    }


    render() {
        return(
            <section className="container-fluid entreprise">
                <div className="containe">

                    <div className="hstack entreprise_dot_list" style={{ overflowX: "auto" }}>
                        <div type="button" onClick={() => this.setDetail("one")} className={this.state.class1}>{ this.state.list.one.title }</div>
                        <div type="button" onClick={() => this.setDetail("two")} className={this.state.class2}>{ this.state.list.two.title }</div>
                        <div type="button" onClick={() => this.setDetail("three")} className={this.state.class3}>{ this.state.list.three.title }</div>
                    </div>

                    <div className="row">
                        <div className="col-lg-9 px-0 bg-white">
                            <div className="row">
                                <div className="col-md-5 col-sm-12">
                                    <img src="images/tractor-agricultural-machine-cultivating-field.jpg" alt="" className="entreprise_image" />
                                </div>
                                <div className="col-md-7">
                                    <p className="entreprise_dot_detail">
                                        { this.state.text }
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 ps-2 d-none d-lg-block">
                            <img src="images/entreprise_first.png" alt="" className="rounded" style={{ height: "110px", objectFit: "cover" }} />
                            <img src="images/entreprise_second.png" alt="" className="rounded" style={{ height: "110px", objectFit: "cover", marginTop: "20px" }} />
                        </div>
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default translate()(Entreprise);