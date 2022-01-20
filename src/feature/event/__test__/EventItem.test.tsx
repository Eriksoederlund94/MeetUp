import EventItem from '../EventItem';
import { render } from '@testing-library/react';

describe('EvenItem component', () => {

    it('Should render without crashing', () => {
        render(<EventItem />);
    });
});