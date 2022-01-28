import NavBar from '../NavBar';
import { render, screen } from '@testing-library/react';

describe('NavBar', () => {
    it('Renders without crashing', () => {
        render(<NavBar title="MeetUp" />);
    });

    it('Should render same text passed into the title prop', () => {
        render(<NavBar title="MeetUp" />);

        const navBarHeaderElement = screen.getByRole('heading');

        expect(navBarHeaderElement).toHaveTextContent('MeetUp');
    });

    it('Should not render same text passed into the title prop', () => {
        render(<NavBar title="MeetUp" />);

        const navBarHeaderElement = screen.getByRole('heading');

        expect(navBarHeaderElement).not.toHaveTextContent('UpMeet');
    });
});
