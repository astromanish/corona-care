import React, { Component } from "react";
import PuffLoader from 'react-spinners/PuffLoader';
import { css } from '@emotion/core';
import axios from "axios";
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

class StateData extends Component {
    state = {
        posts: [],
        loading: false
    }

    componentDidMount() {
        this.setState({
                    loading: true
                });
        axios.get("https://api.covid19india.org/data.json")
            .then(res => {
                this.setState({
                    posts: res.data.statewise,
                    loading: false
                });
            });
    }
    render() {
        const { posts } = this.state;
          const overHead = css`
                            height: 15vh;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: 5vh ;
                            `;
        return (
            <div className="stateData">
                <table id="middle-table">
                    <thead>
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Active</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                        </tr>
                    </thead>
                    {this.state.loading? (<PuffLoader color="#4A90E2" css={overHead} loading={this.state.loading} />): (<tbody>
                        {posts.map(post => {
                            if (post.statecode !== "TT")
                                return (
                                    <tr key={post.statecode}>
                                        <td id="statename"><Link to={`/status/india/${post.statecode}`}>{post.state}</Link></td>
                                        <td id="confirmed">
                                            <div>
                                                <span><NumberFormat value={post.confirmed} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></span>
                                                {
                                                    post.deltaconfirmed > 0 && <span>+<NumberFormat value={post.deltaconfirmed} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></span>
                                                }
                                            </div>
                                        </td>
                                        <td id="active">
                                            <NumberFormat value={post.active} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" />
                                        </td>
                                        <td id="recovered">
                                            <div>
                                                <span><NumberFormat value={post.recovered} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></span>
                                                {
                                                    post.deltarecovered > 0 && <span>+<NumberFormat value={post.deltarecovered} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></span>
                                                }
                                            </div>
                                        </td>
                                        <td id="deaths">
                                            <div>
                                                <span><NumberFormat value={post.deaths} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></span>
                                                {
                                                    post.deltadeaths > 0 && <span>+<NumberFormat value={post.deltadeaths} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></span>
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                )
                        }
                        )}
                    </tbody>)}
                </table>
            </div>
        )
    }
}

export default StateData 