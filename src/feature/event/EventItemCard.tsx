import { useState } from 'react';
import { EventItem } from '../../interfaces/eventItem.interface';
import styled from 'styled-components';

interface StyleProps {
    isAttending: boolean;
}

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
        <Container isAttending={isAttending}>
            <div className="img-section">
                <img src={imageUrl} alt={eventName} />
            </div>
            <div className="event-info-section">
                <div className="event-title-section">
                    <p>Event: {eventName}</p>
                    <span>By: {creator}</span>
                </div>
                <p>
                    When: {date} {time}{' '}
                </p>
                {description}
            </div>
            <div className="button-section">
                <button
                    className={isAttending ? 'btn-green' : 'btn-blue'}
                    onClick={() => setIsAttending(!isAttending)}
                >
                    {isAttending ? 'attending' : 'attend'}
                </button>
            </div>
        </Container>
    );
}

export default EventItemCard;

const Container = styled.div<StyleProps>`
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    border-radius: 6px;

    img {
        border-radius: 6px 6px 0px 0px;
        width: 100%;
        height: 190px;
    }

    .event-info-section {
        padding: 0.5rem 2rem;
    }

    .event-title-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .btn-green {
        background: #088c45;
        color: #fff;
    }

    .btn-blue {
        background: #002447;
        color: #fff;
    }

    .button-section {
        padding: 1rem;

        button {
            margin-left: 1rem;
            padding: 0.2rem 0.5rem;
            border-radius: 6px;
            outline: none;
            border: none;
            font-size: 1.3rem;
            transition: transform 0.3s ease;

            &:hover {
                cursor: pointer;
                transform: translateY(-1px);
            }
        }
    }
`;
