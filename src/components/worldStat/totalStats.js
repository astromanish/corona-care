import React, { Component } from "react";
import PuffLoader from 'react-spinners/PuffLoader';
import { css } from '@emotion/core';
import axios from "axios";
import NumberFormat from 'react-number-format';

class TotalStats extends Component {
    state = {
        posts: {},
        loading: false
    }
    componentDidMount() {
        this.setState({
                    loading: true
                });
        axios.get("https://api.covid19api.com/summary")
            .then(res => {
                this.setState({
                    posts: res.data.Global,
                    loading: false
                });
            });
    }
    render() {
          const overHead = css`
                            height: 15vh;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: 5vh ;
                            `;
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
                        {this.state.loading? (<PuffLoader color="#4A90E2" css={overHead} loading={this.state.loading} />): (<tbody key={this.state.posts.statecode}>
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
                        </tbody>)}
                    </table>
                </div>
                <hr />
            </>
        )
    }
}

export default TotalStats