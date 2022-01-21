import EventItemCard from '../EventItemCard';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockEvents } from '../../../mockEvents';

describe('EvenItem component', () => {
    it('Should render without crashing', () => {
        render(<EventItemCard {...mockEvents[0]} />);
    });

    it('component contains add event button', () => {
        render(<EventItemCard {...mockEvents[0]} />);

        const buttonElement = screen.getByRole('button', { name: /attend/i });

        expect(buttonElement).toBeInTheDocument();
    });

    it('changes from attend to attending', () => {
        render(<EventItemCard {...mockEvents[0]} />);

        const buttonElement = screen.getByRole('button', { name: /attend/i });

        userEvent.click(buttonElement);

        expect(buttonElement).toHaveTextContent('attending');
    });

    it('changes from attending to attend', () => {
        render(<EventItemCard {...mockEvents[0]} />);

        const buttonElement = screen.getByRole('button', { name: /attend/i });

        userEvent.click(buttonElement);
        userEvent.click(buttonElement);

        expect(buttonElement).toHaveTextContent('attend');
    });
});
