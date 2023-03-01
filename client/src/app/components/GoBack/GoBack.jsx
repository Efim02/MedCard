import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './goback.scss';
import LeftArrow from '../../assets/svg/arrow-left-short.svg';

export const GoBack = (props) => {
    const navigate = useNavigate();

    return(
        <div className='goback-wrapper'>
            <Link onClick={() => navigate(-1)}>
                <img src={LeftArrow} alt='Go back' />
            </Link>
            <h3>
                {props.text}
            </h3>
        </div>
    )
}

export default GoBack;