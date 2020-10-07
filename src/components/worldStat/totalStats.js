import React, { Component } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

class TotalStats extends Component {
    state = {
        posts: {}
    }
    componentDidMount() {
        axios.get("https://api.covid19api.com/summary")
            .then(res => {
                this.setState({
                    posts: res.data.Global
                });
            });
    }
    render() {
        return (
            <>
                <div className="totalData">
                    <div className="State">World Overview</div>
                    <table id="top-table" key="1">
                        <thead>
                            <tr>
                                <th id="c"><p>Confirmed</p></th>
                                <th id="r"><p>Recovered</p></th>
                                <th id="d"><p>Deaths</p></th>
                            </tr>
                        </thead>
                        <tbody key={this.state.posts.statecode}>
                            <tr>
                                <td id="c">
                                    <h2>
                                        <NumberFormat value={this.state.posts.TotalConfirmed} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" />
                                    </h2>
                                    <p style={{ color: "red" }}>+<NumberFormat value={this.state.posts.NewConfirmed} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></p>
                                </td>
                                <td id="r">
                                    <h2><NumberFormat value={this.state.posts.TotalRecovered} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></h2>
                                    <p style={{ color: "red" }}>+<NumberFormat value={this.state.posts.NewRecovered} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></p>
                                </td>
                                <td id="d">
                                    <h2><NumberFormat value={this.state.posts.TotalDeaths} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></h2>
                                    <p style={{ color: "red" }}>+<NumberFormat value={this.state.posts.NewDeaths} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr />
            </>
        )
    }
}

export default TotalStats