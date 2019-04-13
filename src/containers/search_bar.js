import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    render() {
        return (
            <center>
                <div className="search-bar">
                    <form onSubmit={this.onFormSubmit} className="input-group">
                        <table>

                            <tr>
                                <td>
                                    <input
                                        placeholder="city Name"
                                        value={this.state.term}
                                        className="form-control"
                                        onChange={this.onInputChange}
                                        width="500"
                                    />
                                </td>
                                <td></td>
                                <td>
                                    <span className="input-group-button" >
                                        <button type="submit" className="btn btn-secondary">Submit</button>
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </center>
        );
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        })

    }

    onFormSubmit(event) {
        event.preventDefault();

        // We need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

