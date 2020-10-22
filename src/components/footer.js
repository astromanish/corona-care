import React, { Component } from "react";
import './css/footer.css'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="code">
                    <a className="code-item" href="https://github.com/astromanish/Corona-Info"><i className="fa fa-code icon" aria-hidden="true"></i> Contribute to this site</a>
                    <a className="code-item" href="https://api.covid19india.org/"><i className="fa fa-database icon" aria-hidden="true"></i> API Used</a>
                </div>
                <p className="salutation">
                    Stay Home, Stay Safe
                </p>
            </footer>
        )
    }
}
export default Footer