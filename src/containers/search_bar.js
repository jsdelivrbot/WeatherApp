import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { featchWeather } from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        // Set default state for when the app first boots up
        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e) {
        this.setState({term: e.target.value});
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.featchWeather(this.state.term);
        this.setState({term: ''});
    }
    
    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five day average forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

// Hook up action creator(featchWeather) to this container
function mapDispatchToProps(dispatch) {
    return bindActionCreators({featchWeather}, dispatch);
}

// Passed null as the first argument because we don't care about state
export default connect(null, mapDispatchToProps)(SearchBar);
