import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { bloodParameters } from '../../utils/mocks';


const DropdownList = () => {
    const [parameter, setParameter] = useState(bloodParameters[0]);

    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {bloodParameters.map((param) => <Dropdown.Item>{param.name}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    )
};

export default DropdownList;