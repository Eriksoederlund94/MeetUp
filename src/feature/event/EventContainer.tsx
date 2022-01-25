import styled from 'styled-components';
import EventItemList from './EventItemList';
import { mockEvents } from '../../mockEvents';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

function EventContainer() {
    const [status, setStatus] = useState('all');

    const { state, dispatch } = useContext(AppContext);

    console.log(state);

    function statusHandler(e: any) {
        setStatus(e.target.value);
    }

    useEffect(() => {
        dispatch({ type: 'SET_SORT_BY', payload: status });
    }, [dispatch, status, state.sortBy]);

    return (
        <>
            <select onChange={statusHandler}>
                <option value="all">All</option>
                <option value="day">Date</option>
                <option value="creator">Creator</option>
            </select>
            <Container>
                <EventItemList setSortBy={setStatus} sortBy={status} />
            </Container>
        </>
    );
}

export default EventContainer;

const Container = styled.div`
    display: flex;
    justify-content: center;
`;
