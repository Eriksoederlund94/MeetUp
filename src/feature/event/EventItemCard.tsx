import { useState, useRef } from 'react';
import { EventItem } from '../../interfaces/eventItem.interface';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

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
    comments,
}: EventItem) {
    const [isAttending, setIsAttending] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    function addCommentHandler() {
        comments.push({ id: nanoid(), comment: newComment });
        setNewComment('');
        if (inputRef) {
            inputRef.current!.value = '';
        }
    }

    return (
        <Container data-testid="event-item-container" isAttending={isAttending}>
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
                <button onClick={() => setShowComments(!showComments)}>
                    {showComments ? 'Hide comments' : 'Show comments'}
                </button>
                <div></div>
            </div>
            {showComments && (
                <div
                    data-testid="comment-container"
                    className="comment-section"
                >
                    <input
                        ref={inputRef}
                        onChange={(e) => setNewComment(e.target.value)}
                        value={newComment}
                        type="text"
                        placeholder="Add comment"
                    />
                    <button
                        onClick={addCommentHandler}
                        className="addComment-btn"
                    >
                        Add comment
                    </button>
                    {comments.length > 0 &&
                        comments.map((c) => (
                            <p data-testid={`comment-${c.id}`} key={c.id}>
                                {c.comment}
                            </p>
                        ))}
                </div>
            )}
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
