import {render, fireEvent, screen} from '@testing-library/react'
import { act, waitFor } from 'react-dom/test-utils';
import Help from '../page'

describe('Help Page', () => {
    it('should have display contact info', () => {
        // ARRANGE
        render(<Help />);

        // ACT
        const listItems = screen.getAllByRole('listitem');
        const image = screen.getByRole('img');
        const link = screen.getByRole('link');

        //ASSERT
        expect(image).toBeInTheDocument();
        expect(listItems).toHaveLength(3);
        expect(listItems[0]).toHaveTextContent('Student Service Desk');
        expect(listItems[1]).toHaveTextContent('+4611111111');
        expect(link).toHaveTextContent('help@example.com');
        expect(image).toHaveProperty('alt', 'School logo from internetz');
    })
})