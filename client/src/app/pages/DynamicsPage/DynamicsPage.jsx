import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/Stack';
import Spinner from 'react-bootstrap/Spinner';
import GoBack from '../../components/GoBack';
import DropdownList from '../../components/DropdownList';
import LineChart from '../../components/LineChart';
import { bloodParameters, chartOptions, mockDynamics } from '../../utils/constants';
import { getRecordByType } from '../../services/records.service';
import './DynamicsPage.scss';

const DynamicsPage = () => {
    const [parameter, setParameter] = useState(bloodParameters[0]);
    const [data, setData] = useState(mockDynamics);
    const [isLoading, setIsLoading] = useState(true);
 
    useEffect(() => {
        setIsLoading(true);
        getRecordByType(parameter.id).then((value) => {
            setData(data);
            setIsLoading(false);
        });
    }, [parameter]);

    return(
        <>
            <Container className='dynamics_page'>
                <Stack className='dynamics_topbar' direction='horizontal'>
                    <GoBack text="Динамика показателей"/>
                    <DropdownList
                        disabled={ isLoading }
                        setParameter={ setParameter }
                        items={ bloodParameters }
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