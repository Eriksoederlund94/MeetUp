import { mockEvents } from '../../mockEvents';
import styled from 'styled-components';
import EventItemCard from './EventItemCard';

function EventItemList() {
    return (
        <Container>
            {mockEvents.map((item) => (
                <EventItemCard key={item.id} {...item} />
            ))}
        </Container>
    );
}

export default EventItemList;

const Container = styled.div``;
