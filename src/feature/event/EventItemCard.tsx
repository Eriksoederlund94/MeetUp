import React, { useState, useRef } from 'react';
import { EventItem } from '../../interfaces/eventItem.interface';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import EventComment from './EventComment';

interface StyleProps {
    isAttending: boolean;
}

function EventItemCard({
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

    function addCommentHandler(e: React.FormEvent) {
        e.preventDefault();

        if (newComment.trim() === '') return;

        comments.push({
            id: nanoid(),
            comment: newComment,
            createdAt: new Date().toString().slice(4, 21),
        });
        
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
                    <p>
                        <span>Event:</span> {eventName}
                    </p>
                    <p>
                        <span>By:</span> {creator}
                    </p>
                </div>
                <div className="when-description-section">
                    <p>
                        <span>When:</span> {date.toLocaleDateString()} {time}
                    </p>
                    <p>{description} </p>
                </div>
            </div>
            <div className="button-section">
                {date.toLocaleDateString() >=
                    new Date().toLocaleDateString() && (
                    <button
                        className={isAttending ? 'btn-green' : 'btn-blue'}
                        onClick={() => setIsAttending(!isAttending)}
                    >
                        {isAttending ? 'Attending' : 'Attend'}
                    </button>
                )}
                <button
                    className=" btn-blue"
                    onClick={() => setShowComments(!showComments)}
                >
                    {showComments ? 'Hide comments' : 'Show comments'}
                </button>
                <div></div>
            </div>
            {showComments && (
                <div
                    data-testid="comment-container"
                    className="comment-section"
                >
                    <form onSubmit={addCommentHandler}>
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
                        Comment
                    </button>
                    </form>
                    {comments.length > 0 &&
                        comments.map((comment) => (
                            <EventComment key={comment.id} {...comment} />
                        ))}
                </div>
            )}
        </Container>
    );
}

export default EventItemCard;

const Container = styled.div<StyleProps>`
    border-radius: 6px;
    background-color: #fbf6f6;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    span {
        font-weight: bold;
    }

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

    .when-description-section {
        min-height: 180px;
    }

    .button-section {
        padding: 1rem;
        display: flex;
        justify-content: space-between;

        .btn-green {
            background: #088c45;
        }

        .btn-blue {
            background: #002447;
        }

        button {
            padding: 0.2rem 0.5rem;
            border-radius: 6px;
            outline: none;
            border: none;
            font-size: 1.2rem;
            transition: transform 0.3s ease;
            color: #fff;

            &:hover {
                cursor: pointer;
                transform: translateY(-1px);
            }
        }
    }

    .comment-section {
        overflow-y: scroll;
        max-height: 100px;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        display: block;

        p > span {
            font-weight: 300;
            color: #000;
        }

        p {
            color: #666666;
        }

        &::-webkit-scrollbar {
            width: 0.4em;
        }
        
        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            border-radius: 4px;
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: #4eb5f1;
            outline: 1px solid slategrey;
            border-radius: 4px;
        }

        p {
            word-wrap: break-word;
            padding: 0.5rem;
            margin-top: 0.5rem;
        }

        input {
            all: unset;
            border: 2px solid #ccc;
            border-radius: 4px;
            padding: 0.3rem;
            width: 50%;
            margin-bottom: 0.2rem;

            &::-webkit-input-placeholder {
                color: #333;
            }
        }

        .addComment-btn {
            all: unset;
            display: inline-block;
            padding: 0.3rem 0.5rem;
            margin: 0 0.5rem;
            border-radius: 8px;
            box-sizing: border-box;
            text-decoration: none;
            font-weight: 300;
            color: #ffffff;
            background-color: #4eb5f1;
            text-align: center;
            transition: all 0.2s;

            &:hover {
                cursor: pointer;
                background-color: #5099c4;
            }
        }
    }
`;
