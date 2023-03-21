import React, { useState, useEffect, useRef, useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/Stack';
import Spinner from 'react-bootstrap/Spinner';
import GoBack from '../../components/GoBack';
import DropdownList from '../../components/DropdownList';
import LineChart from '../../components/LineChart';
import { chartOptions } from '../../utils/constants';
import { Context } from '../../..';
import './DynamicsPage.scss';
import { getLastIndicatorsApi } from '../../services/records.service';
import { extractDataset, getParameterInfo } from '../../utils/parametersData';

const DynamicsPage = () => {
    const [parameter, setParameter] = useState(null);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { user, indicators } = useContext(Context);
    const parameterInfo = useRef(null);

    const parameters = indicators.indicators.map((indicator) => indicator.indicatorEnum);

    useEffect(() => {
        parameterInfo.current = getParameterInfo(parameter);

        if (parameterInfo.current) {
            setIsLoading(true);
            getLastIndicatorsApi(user.user.id, parameter)
            .then((value) => {
                setData(extractDataset(value));
            })
            .finally(() => {
                setIsLoading(false);
            });
        }

    }, [parameter]);

    return(
        <>
            <Container className='dynamics_page'>
                <Stack className='dynamics_topbar' direction='horizontal'>
                    <GoBack text="Динамика показателей"/>
                    <DropdownList
                        disabled={ isLoading }
                        setParameter={ setParameter }
                        items={ parameters }
                        placeholder='Выберите показатель'/>
                </Stack>
                <Container fluid className='dynamics_diagram'>
                    { isLoading 
                        ? <Spinner className='main_spinner'/> 
                        : <LineChart 
                            parameter={ parameterInfo.current }
                            data={ data }
                            options={ chartOptions } /> }
                </Container>
            </Container>
        </>
    )
}

export default DynamicsPage;