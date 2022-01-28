import { mockEvents } from '../../mockEvents';
import EventItemCard from './EventItemCard';
import { EventItem } from '../../interfaces/eventItem.interface';
import styled from 'styled-components';

interface Props {
    sortBy: string;
}

function EventItemList({ sortBy }: Props) {
    // function sortItems(key: string) {
    //     return key === 'all' || ''
    //         ? mockEvents
    //         : [...mockEvents].sort(
    //               (a: EventItem, b: EventItem) =>
    //                   a.date.getTime() - b.date.getTime()
    //           );
    // }

    function sortItems(key: string) {
        return key === 'day'
            ? [...mockEvents].sort(
                  (a: EventItem, b: EventItem) =>
                      a.date.getTime() - b.date.getTime()
              )
            : mockEvents;
    }

    return (
        <Container>
            {sortItems(sortBy).map((item: EventItem) => (
                <EventItemCard key={item.id} {...item} />
            ))}
            <br />
        </Container>
    );
}

export default EventItemList;

const Container = styled.div`
    padding: 2rem;
    display: grid;
    max-height: 0;
    grid-template-columns: repeat(3, 340px);
    gap: 1rem;
    margin-bottom: 3rem;

    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 340px);
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(1, 340px);
    }
`;
