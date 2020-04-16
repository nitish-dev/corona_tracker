import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyreport, setDailyReport] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setDailyReport(await fetchDailyData());
        }
        fetchData();

    }, []);
    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current case in ${country}` },
                }}
            />
        ) : null
    );
    const lineChart = (
        dailyreport[0] ? (
            <Line
                data={{
                    labels: dailyreport.map(({ date }) => date),
                    datasets: [{
                        data: dailyreport.map((data) => data.confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: dailyreport.map((data) => data.deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    },
                    ],
                }}
            />
        ) : null
    );
    return (
        <div style={{ marginBottom: "50px" }}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;
