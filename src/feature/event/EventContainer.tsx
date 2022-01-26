import styled from 'styled-components';
import EventItemList from './EventItemList';

import React, { useState } from 'react';

function EventContainer() {
    const [status, setStatus] = useState('all');

    function statusHandler(e: React.ChangeEvent<HTMLSelectElement>): void {
        setStatus(e.target.value);
    }

    return (
        <>
            <select onChange={statusHandler}>
                <option value="all">All</option>
                <option value="day">Date</option>
            </select>
            <Container>
                <EventItemList sortBy={status} />
            </Container>
        </>
    );
}

export default EventContainer;

const Container = styled.div`
    display: flex;
    justify-content: center;
`;
