// importing axios from node-module
import axios from '../../node_modules/axios';

// declaring a variable regarding the api
let url = 'https://covid19.mathdro.id/api';

// exporting general data 
export let fetchData = async (country) => {
    // declaring a dynamic url
    let changeableURL = url;

    // a condition 
    if (country) {
        changeableURL = `${url}/countries/${country}`;
    }

    try {
        let { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL);
        // console.log(response);

        let modifiedData = {
            confirmed,
            recovered, 
            deaths, 
            lastUpdate,
        };

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
};

// exporting the daily fetchData
export let fetchDailyData = async () => {
    try {
        let { data } = await axios.get(`${url}/daily`);
        // console.log(data);

        let modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
};


// exporting the countries
export let fetchCountries = async () => {
    try {
        let { data: { countries } } = await axios.get(`${url}/countries`);
        // console.log(data);

        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
};

