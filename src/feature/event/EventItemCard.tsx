import { useState } from 'react';
import { EventItem } from '../../interfaces/eventItem.interface';
import styled from 'styled-components';

function EventItemCard({
    id,
    eventName,
    date,
    time,
    description,
    creator,
    imageUrl,
}: EventItem) {
    const [isAttending, setIsAttending] = useState(false);

    return (
        <Container>
            <img src={imageUrl} alt={eventName} />
            Event: {eventName}
            When: {date} {time}
            {description}
            <button onClick={() => setIsAttending(!isAttending)}>
                {isAttending ? 'attending' : 'attend'}
            </button>
        </Container>
    );
}

export default EventItemCard;

const Container = styled.div`
    img {
        width: 200px;
        height: 170px;
    }
`;
