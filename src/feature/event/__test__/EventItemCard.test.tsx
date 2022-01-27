import EventItemCard from '../EventItemCard';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockEvents } from '../../../mockEvents';

describe('EvenItem component', () => {
    it('Should render without crashing', () => {
        render(<EventItemCard {...mockEvents[3]} />);
    });

    it('component contains add event button', () => {
        render(<EventItemCard {...mockEvents[3]} />);

        const buttonElement = screen.getByRole('button', { name: 'Attend' });

        expect(buttonElement).toBeInTheDocument();
    });

    it('changes from Attend to Attending', () => {
        render(<EventItemCard {...mockEvents[3]} />);

        const buttonElement = screen.getByRole('button', { name: 'Attend' });

        userEvent.click(buttonElement);

        expect(buttonElement).toHaveTextContent('Attending');
    });

    it('changes from Attending to Attend', () => {
        render(<EventItemCard {...mockEvents[3]} />);

        const buttonElement = screen.getByRole('button', { name: 'Attend' });

        userEvent.click(buttonElement);
        userEvent.click(buttonElement);

        expect(buttonElement).toHaveTextContent('Attend');
    });

    it('Should have default CSS-class (btn-blue)', () => {
        render(<EventItemCard {...mockEvents[3]} />);

        const buttonElement = screen.getByRole('button', { name: 'Attend' });

        expect(buttonElement).not.toHaveClass('btn-green');
    });

    it('Should change CSS-class to "btn-green"', () => {
        render(<EventItemCard {...mockEvents[3]} />);

        const buttonElement = screen.getByRole('button', { name: 'Attend' });

        userEvent.click(buttonElement);

        expect(buttonElement).toHaveClass('btn-green');
    });

    it('Should not show Attend button when the event date has passed.', () => {
        render(<EventItemCard {...mockEvents[0]} />);

        const button = screen.queryByRole('button', { name: 'Attend' });

        expect(button).not.toBeInTheDocument();
    });
});
