import React from '../../../node_modules/react';
import styles from './Chart.module.scss';

// importing Line, Bar
import { Line, Bar } from "../../../node_modules/react-chartjs-2";

// importing fetchDailyData
import { fetchDailyData } from '../../api/index';

export default function Chart({ data: { confirmed, recovered, deaths}, country }) {
    let [dailyData, setDailyData] = React.useState([]);

    // useEffect method
    React.useEffect(() => {
        // to call async, a new function is required
        let fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        };
        // console.log(dailyData);

        // calling the function
        fetchAPI();
    }, []);

    // adding a LineChart
    let lineChart = (
        // either --> dailyData.length !== 0     OR -->
        dailyData.length ? (
            <Line 
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }],
                }}
            />
        ) : null
    );
    // console.log(confirmed, recovered, deaths);

    const barChart = (
        confirmed
            ? (
                <Bar 
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgba(0, 0, 255, 0.5)', 
                                'rgba(0, 255, 0, 0.5)', 
                                'rgba(255, 0, 0, 0.5)',
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}` },
                    }}
                />
            ) : null
    );

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}