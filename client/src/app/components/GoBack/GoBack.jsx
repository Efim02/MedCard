import React from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import { BsArrowLeft } from 'react-icons/bs';
import './GoBack.scss';

const GoBack = (props) => {
    const navigate = useNavigate();
    const handleClick = () => navigate(-1);

    return(
        <>
            <Stack className='goback_container' direction='horizontal' gap={2}>
                <BsArrowLeft onClick={handleClick} />
                <p className='goback_title'>{props.text}</p>
            </Stack>
        </>
    );
}

export default GoBack;