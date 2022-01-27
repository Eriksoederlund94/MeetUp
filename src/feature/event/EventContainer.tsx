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
            <Container>
                <h3>Sort events</h3>
                <select onChange={statusHandler}>
                    <option value="">-- Sort by --</option>
                    <option value="all">All</option>
                    <option value="day">Date</option>
                </select>
                <div className="event-item-list">
                    <EventItemList sortBy={status} />
                </div>
            </Container>
        </>
    );
}

export default EventContainer;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    select {
        width: 130px;
        font-size: 1rem;
        border: none;
        padding: 0.5rem;
        box-shadow: -1px 2px 10px rgba(0, 0, 0, 0.2);
        border-radius: 6px;
    }

    .event-item-list {
        display: flex;
        justify-content: center;
        min-height: 100vh;
    }
`;
