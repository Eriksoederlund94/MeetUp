import styled from 'styled-components';
import EventItemList from './EventItemList';

function EventContainer() {
    return (
        <Container>
            <EventItemList />
        </Container>
    );
}

export default EventContainer;

const Container = styled.div`
    display: flex;
    justify-content: center;
`;
