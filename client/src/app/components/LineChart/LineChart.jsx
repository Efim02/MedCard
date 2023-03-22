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

const Content = (data, parameter, options) => {
    const { name, info } = parameter;
    
    return (
        <>
            <Stack className='linechart_info' direction='horizontal'>
                <Stack className='linechart_title'>
                    <h1>{name}</h1>
                    <p>{`${info.fullName} (${info.measure})`}</p>
                </Stack>
                <Stack className='linechart_norms'>
                    <p>Норма для женщин: {info.womenNormMin} - {info.womenNormMax}</p>
                    <p>Норма для мужчин: {info.menNormMin} - {info.menNormMax}</p>
                </Stack>
            </Stack>
            <hr />
            <Container className='linechart_diagram'>
                <Line 
                data={ {...data} }
                options={ options } />
            </Container>
        </>
    )
}

const LineChart = (props) => {
    const { data, parameter, options } = props;
    return(
        <>
            <Container className='linechart_container'>
                {
                    (data && parameter) 
                        ? Content(data, parameter, options)
                        : <p className="linechart_undefined title">Здесь могла быть ваша диаграмма...</p>
                }
            </Container>
        </>
    );
}

export default LineChart;