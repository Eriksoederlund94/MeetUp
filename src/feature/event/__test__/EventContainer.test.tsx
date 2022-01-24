import { render, screen } from '@testing-library/react';
import EventItemCard from '../EventItemCard';
import EventContainer from '../EventContainer';

describe('EventContainer component', () => {
    // Component renders without crashing
    // Event-container renders specific event
    it('Should render without crashing', () => {
        render(<EventContainer />);
    });
});
