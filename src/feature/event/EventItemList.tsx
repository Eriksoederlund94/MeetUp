import { mockEvents } from '../../mockEvents';
import styled from 'styled-components';
import EventItemCard from './EventItemCard';
import { EventItem } from '../../interfaces/eventItem.interface';

interface Props {
    sortBy: string;
}

function EventItemList({ sortBy }: Props) {

    function sortItems(key: string) {
        return key === 'all'
            ? mockEvents
            : [...mockEvents].sort((a: EventItem, b: EventItem) => a.day - b.day);
    }

    return (
        <Container>
            {sortItems(sortBy).map((item: EventItem) => (
                <EventItemCard key={item.id} {...item} />
            ))}
        </Container>
    );
}

export default EventItemList;

const Container = styled.div`
    padding: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 330px);
    gap: 1rem;
`;
