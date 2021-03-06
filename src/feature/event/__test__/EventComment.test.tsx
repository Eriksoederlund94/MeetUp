import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EventComment from '../../event/EventComment';
import EventItemCard from '../../event/EventItemCard';
import { mockEvents } from '../../../mockEvents';

describe('Event comment', () => {
    const mockComment = {
        id: '1',
        comment: 'Hello',
        createdAt: 'Jan 27 2022 14:11',
    };

    it('Should render without crashing', () => {
        render(<EventComment {...mockComment} />);
    });

    it('Should display comment in comment section', () => {
        render(<EventItemCard {...mockEvents[0]} />);

        const buttonElement = screen.getByRole('button', {
            name: /Show comments/i,
        });

        userEvent.click(buttonElement);

        expect(buttonElement).toHaveTextContent('Hide comments');
    });

    it('Should show input field for new comment', () => {
        render(<EventItemCard {...mockEvents[0]} />);

        const buttonElement = screen.getByRole('button', {
            name: /Show comments/i,
        });
        userEvent.click(buttonElement);
        const commentContainer = screen.getByTestId('comment-container');
        expect(commentContainer).toBeInTheDocument();
    });
    it('Should add a new comment', () => {
        render(<EventItemCard {...mockEvents[0]} />);

        const buttonEle = screen.getByRole('button', {
            name: /Show comments/i,
        });

        userEvent.click(buttonEle);

        const buttonElement = screen.getByRole('button', {
            name: 'Comment',
        });

        userEvent.click(buttonElement);

        const inputElement = screen.getByPlaceholderText('Add comment');

        expect(inputElement).toBeInTheDocument();
    });

    it('Should add a new comment in the comment section', () => {
        render(<EventItemCard {...mockEvents[1]} />);

        const showCommentBtn = screen.getByRole('button', {
            name: /Show comments/i,
        });

        userEvent.click(showCommentBtn);

        const buttonElement = screen.getByRole('button', {
            name: 'Comment',
        });

        const inputElement = screen.getByPlaceholderText('Add comment');

        userEvent.type(inputElement, 'Hello');

        userEvent.click(buttonElement);

        const commentElement = screen.getByText(/Hello/i);

        expect(commentElement).toHaveTextContent(/Hello/i);
    });
});
