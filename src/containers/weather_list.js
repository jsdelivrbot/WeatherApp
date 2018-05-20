import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart_component.js';

class WeatherList extends Component {
    
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="orange" infoType="temp" /></td>
                <td><Chart data={pressures} color="blue" /></td>
                <td><Chart data={humidities} color="black" /></td>
            </tr>
        );
    }

    render() {
        return(
            <table className="table table-condensed">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(K/F/C)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody className="table-striped">
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);