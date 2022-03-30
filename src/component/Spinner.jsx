import { Component } from "react/cjs/react.production.min";


export class Spinner extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center" style={{ marginTop: "40vh"}}>
                    <div className="spinner-border spinner__loading" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }
}