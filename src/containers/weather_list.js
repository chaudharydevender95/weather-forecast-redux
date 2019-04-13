import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';

class WeatherList extends Component {

    renderWeather(cityData){
        const cityName = cityData.city.name;
        const timeSlots = cityData.list.map(weather=>{
            let date = new Date(weather.dt_txt);
            return `${date.getDate()} ${date.getHours()}`;
        });
        const temps = _.map(cityData.list.map(weather=>weather.main.temp),(temp) => _.round(temp -273,0)).map((data,i)=>{return {x:timeSlots[i],y: data}});
        const pressures = cityData.list.map(weather=>weather.main.pressure).map((data,i)=>{return {x:timeSlots[i],y: data}});
        const humidities = cityData.list.map(weather=>weather.main.humidity).map((data,i)=>{return {x:timeSlots[i],y: data}});
        // console.log(temps);

        return(
            <tr key={cityName}>
                <td>{cityData.city.name}</td>
                <Chart data={temps} color="orange" unit="C"/>
                <Chart data={pressures} color="orange" unit="hPa"/>
                <Chart data={humidities} color="orange" unit="%"/>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }){
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);