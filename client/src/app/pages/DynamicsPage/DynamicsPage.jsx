import React from 'react';
import './index.scss';
import Container from 'react-bootstrap/Container';
import GoBack from '../../components/GoBack';
import LineChart from '../../components/LineChart';
import { data } from './mock';
import DropdownList from '../../components/DropdownList';

const DynamicsPage = () => {
    return(
        <Container className='dynamics-wrapper'>
            <div className='topbar-menu'>
                <GoBack text='Динамика показателей' />
                <DropdownList />
            </div>
            <LineChart 
                data={data} 
                info={{
                    indicator: 'mcv',
                    unitsInfo: 'Средний объем эритроцитов (фл или мкм3)',
                    defaultValues: {
                        men: '30-31',
                        women: '30-31'
                    }
                }}
                />
        </Container>
    );
};

export default DynamicsPage;