import React from 'react';
import './linechart.scss';
import { ResponsiveLine } from '@nivo/line';
import Container from 'react-bootstrap/Container';
import { config } from './config';

const LineChart = (props) => {
    return (
        <Container className='chart-wrapper'>
            <div className='chart-info'>
                <div className='chart-info chart-title'>
                    <h1>{props.info.indicator.toUpperCase()}</h1>
                    <p>{props.info.unitsInfo}</p>
                </div>
                <div className='chart-info chart-rate'>
                    <p>Норма для мужчин: {props.info.defaultValues.men}</p>
                    <p>Норма для женщин: {props.info.defaultValues.women}</p>
                </div>
            </div>
            <hr />
            <ResponsiveLine
                data={props.data}
                {...config}
            />
        </Container>
    )
};

export default LineChart;