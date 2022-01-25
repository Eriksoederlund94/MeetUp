import { mockEvents } from '../../mockEvents';
import styled from 'styled-components';
import EventItemCard from './EventItemCard';

interface Props {
    sortBy: string;
}

function EventItemList({ sortBy }: Props) {
    function sortItems(key: any) {
        return key === 'all'
            ? mockEvents
            : [...mockEvents].sort((a: any, b: any) => a[key] - b[key]);
    }

    return (
        <Container>
            {sortItems(sortBy).map((item: any) => (
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
