import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import './linechart.scss';

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);

const LineChart = (props) => {
    const { data, parameter, options } = props;

    return(
        <>
            <Container className='linechart_container'>
                <Stack className='linechart_info' direction='horizontal'>
                    <Stack className='linechart_title'>
                        <h1>{parameter.name}</h1>
                        <p>{`${parameter.info.fullName} (${parameter.info.measure})`}</p>
                    </Stack>
                    <Stack className='linechart_norms'>
                        <p>Норма для женщин: {parameter.info.womenNorm}</p>
                        <p>Норма для мужчин: {parameter.info.menNorm}</p>
                    </Stack>
                </Stack>
                <hr />
                <Container className='linechart_diagram'>
                    <Line 
                    data={ {...data} }
                    options={ options } />
                </Container>
            </Container>
        </>
    );
}

export default LineChart;