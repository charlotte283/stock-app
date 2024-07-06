import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as Chartjs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({ charData }) => {
    return (
        <Line
            data={charData}
            options={{
                scales: {
                    x: {
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 10,
                            maxRotation: 0,
                        }
                    }
                }
            }}
        />
    );
};

export default LineChart;
