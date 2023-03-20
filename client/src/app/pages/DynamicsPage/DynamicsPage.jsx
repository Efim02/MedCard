import React, { useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/Stack';
import Spinner from 'react-bootstrap/Spinner';
import GoBack from '../../components/GoBack';
import DropdownList from '../../components/DropdownList';
import LineChart from '../../components/LineChart';
import { chartOptions, mockDynamics } from '../../utils/constants';
import { Context } from '../../..';
import './DynamicsPage.scss';
import { infoParameters } from '../../utils/infoParameters';

const DynamicsPage = () => {
    const [parameter, setParameter] = useState(infoParameters[0]);
    const [data, setData] = useState(mockDynamics);
    const [isLoading, setIsLoading] = useState(true);
    const { records, indicators } = useContext(Context);

    useEffect(() => {
        setIsLoading(true);
    }, [parameter]);

    return(
        <>
            <Container className='dynamics_page'>
                <Stack className='dynamics_topbar' direction='horizontal'>
                    <GoBack text="Динамика показателей"/>
                    <DropdownList
                        disabled={ isLoading }
                        setParameter={ setParameter }
                        items={ infoParameters }
                        placeholder='Выберите показатель'/>
                </Stack>
                <Container fluid className='dynamics_diagram'>
                    { isLoading 
                        ? <Spinner className='main_spinner'/> 
                        : <LineChart 
                            parameter={ parameter }
                            data={ data } 
                            options={ chartOptions } /> }
                </Container>
            </Container>
        </>
    )
}

export default DynamicsPage;