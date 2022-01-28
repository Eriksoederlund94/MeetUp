import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EventContainer from '../EventContainer';

describe('EventContainer component', () => {
    it('Should render without crashing', () => {
        render(<EventContainer />);
    });

    it('should render component with select dropdown menu', () => {
        render(<EventContainer />);
        const selectElement = screen.getByRole('combobox');
        expect(selectElement).toBeInTheDocument();
    });

    it('should display correct number of options in selector', () => {
        render(<EventContainer />);

        expect(screen.getAllByRole('option').length).toBe(3);
    });

    it('Should change options when selected', () => {
        render(<EventContainer />);
        const selectElement = screen.getByRole('combobox');
        const optionElement = screen.getByRole('option', { name: 'All' });
        userEvent.selectOptions(selectElement, optionElement);

        expect(optionElement).toHaveValue('all');
    });
});
