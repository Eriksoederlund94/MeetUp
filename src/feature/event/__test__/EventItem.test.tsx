import EventItem from '../EventItem';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('EvenItem component', () => {
    it('Should render without crashing', () => {
        render(<EventItem />);
    });

    it('component contains add event button', () => {
        render(<EventItem />);

        const buttonElement = screen.getByRole('button', { name: /attend/i });

        expect(buttonElement).toBeInTheDocument();
    });
    it('changes from attend to attending', () => {
        render(<EventItem />);

        const buttonElement = screen.getByRole('button', { name: /attend/i });

        userEvent.click(buttonElement);

        expect(buttonElement).toHaveTextContent('attending');
    });

    it('changes from attending to attend', () => {
        render(<EventItem />);

        const buttonElement = screen.getByRole('button', { name: /attend/i });

        userEvent.click(buttonElement);
        userEvent.click(buttonElement);

        expect(buttonElement).toHaveTextContent('attend');
    });
});
