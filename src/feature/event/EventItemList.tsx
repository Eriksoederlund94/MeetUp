import { mockEvents } from '../../mockEvents';
import styled from 'styled-components';
import EventItemCard from './EventItemCard';
import { EventItem } from '../../interfaces/eventItem.interface';
import { useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

interface Props {
    sortBy: string;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

function EventItemList({ sortBy }: Props) {
    const { state } = useContext(AppContext);
    function sortItems(key: any) {
        return key === 'all'
            ? mockEvents
            : mockEvents.sort((a: any, b: any) => a[key] - b[key]);
    }

    useEffect(() => {}, [state.sortBy]);

    console.log(sortItems('creator'));

    return (
        <Container>
            {sortItems(state.sortBy).map((item: any) => (
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
