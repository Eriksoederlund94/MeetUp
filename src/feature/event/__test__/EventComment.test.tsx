import { fireEvent, getNodeText, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EventComment from '../../event/EventComment';
import EventItemCard from '../../event/EventItemCard';
import { mockEvents } from '../../../mockEvents';
import { useState } from 'react';

interface CommentContainerProps {
    showComments: boolean;
}

function CommentContainer({ showComments }: CommentContainerProps) {
    const [show, setShow] = useState(false);
    return <div data-testid='event-item-container' className='event-card-item'>
        <button onClick={() => setShow(!show)}>
            {show ? 'Hide comments' : 'Show comments'}
        </button>
        {showComments &&
            <div data-testid='comment-container'>
                <h4>Comments</h4>
            </div>
        }
    </div>
}

describe('Event comment', () => {

    it('Should render without crashing', () => {
        render(<EventComment />);
    });

    it('Should display comment in comment section', () => {
        render(<EventItemCard {...mockEvents[0]} />);

        const buttonElement = screen.getByRole('button', { name: /Show comments/i });
    
        userEvent.click(buttonElement);

        expect(buttonElement).toHaveTextContent('Hide comments');
    });

    /* it('Should set showComments to true', () => {
        render(<EventItemCard {...mockEvents[0]} />);
        const buttonElement = screen.getByRole('button', { name: /Hide comments/i });
        userEvent.click(buttonElement);
    }); */

    /* it('Should show input field for new comment', async () => {
        render(<EventItemCard {...mockEvents[0]} />);

        const buttonElement = screen.getByRole('button', { name: /Show comments/i });
        const commentContainer = await screen.findByTestId('comment-container');
       
        userEvent.click(buttonElement);
        
        await waitFor(() => expect(commentContainer).toBeInTheDocument());
    }); */
    

    it('Should show input field for new comment', async () => {
        render(<CommentContainer showComments={false} />);
        //const buttonElement = screen.getByRole('button', { name: /Show comments/i });
        const container = await screen.getByTestId('event-item-container');
        const commentContainer = within(container).getByText('Comments');
        const showCommentsBtn = screen.getByRole('button');

        //fireEvent.click(showCommentsBtn);
       
        userEvent.click(showCommentsBtn);
        await waitFor(() => expect(commentContainer).toBeInTheDocument());
    });
});