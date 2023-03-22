import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import './DropdownList.scss';

const DropdownItems = (items) => items.map(
    (item, index) => 
        <Dropdown.Item className='dropdown_item' key={index} value={index}>
            {item}
        </Dropdown.Item>
)

const DropdownList = (props) => {
    const [item, setItem] = useState(null);
    const items = props.items;

    const onSelect = (eventKey, event) => {
        let value = event.target.getAttribute('value');
        let selectedItem = items[value];

        setItem(selectedItem);
        props.setParameter(selectedItem);
    }

    return(
        <>
            <Dropdown className='dropdown_list' onSelect={onSelect} >
                <Dropdown.Toggle className='dropdown_btn' variant='light' disabled={props.disabled}>
                    <p>{ item ? item : `${props.placeholder}`}</p>
                    <MdOutlineKeyboardArrowDown />
                </Dropdown.Toggle>
                <Dropdown.Menu className='dropdown_menu' variant='secondary'>
                    { DropdownItems(items) }
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}

export default DropdownList;