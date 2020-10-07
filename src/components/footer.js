import React, { Component } from "react";
import './css/footer.css'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="code">
                    <a href="https://github.com/astromanish/Corona-Info"> <div>  <i className="fa fa-code" aria-hidden="true"></i><p>Contribute to this site</p> </div></a>
                    <a href="https://api.covid19india.org/"> <div><i className="fa fa-database" aria-hidden="true"></i><p>API Used</p></div> </a>
                </div>
                <div className="salutation">
                    <p>Stay Home, Stay Safe</p>
                </div>
            </footer>
        )
    }
}
export default Footer