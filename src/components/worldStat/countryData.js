import React, { Component } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

class CountryData extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get("https://api.covid19api.com/summary")
            .then(res => {
                this.setState({
                    posts: res.data.Countries
                });
            });
    }
    render() {
        const { posts } = this.state;
        return (
            <div className="countryData">
                <table id="middle-table">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => {
                            return (
                                <tr key={post.CountryCode}>
                                    <td id="country-name">{post.Country}</td>
                                    <td id="confirmed">
                                        <div>
                                            <span><NumberFormat value={post.TotalConfirmed} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></span>
                                            {
                                                post.NewConfirmed > 0 && <span>+<NumberFormat value={post.NewConfirmed} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></span>
                                            }
                                        </div>
                                    </td>
                                    <td id="recovered">
                                        <div>
                                            <span><NumberFormat value={post.TotalRecovered} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></span>
                                            {
                                                post.NewRecovered > 0 && <span>+<NumberFormat value={post.NewRecovered} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></span>
                                            }
                                        </div>
                                    </td>
                                    <td id="deaths">
                                        <div>
                                            <span><NumberFormat value={post.TotalDeaths} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></span>
                                            {
                                                post.NewDeaths > 0 && <span>+<NumberFormat value={post.NewDeaths} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></span>
                                            }
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CountryData; 