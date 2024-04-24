import {render, fireEvent, screen} from '@testing-library/react'
import { act, waitFor } from 'react-dom/test-utils';
import Students from '../page'

const mockUsePathname = jest.fn();
const URL = 'http://example.com';

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

const mockStudents = [
    {'title': 'Test Student', 'id': '666'},
    {'title': 'Test Student 2', 'id': '999'}
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockStudents),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

const OLD_ENV = process.env;

beforeEach(() => {
    jest.resetModules() // Clears the cache
    process.env = { ...OLD_ENV }; // Make a copy of envs
});

afterAll(() => {
    process.env = OLD_ENV; // Restore old envs
});

describe('Students Page', () => {
    it('should have correct heading', async () => {
        process.env.NEXT_PUBLIC_BACKEND_URL = URL;

        // ARRANGE
        await act(() => Promise.resolve(render(<Students />)));

        // ACT
        const studentsHeading = screen.getByText('STUDENTS');

        //ASSERT
        expect(studentsHeading).toBeInTheDocument();
    })

    it('should load students list correctly', async () => {
        process.env.NEXT_PUBLIC_BACKEND_URL = URL;

        // ARRANGE
        await act(() => Promise.resolve(render(<Students />)));

        // ACT
        const listItems = screen.getAllByRole('listitem');

        //ASSERT
        expect(listItems).toHaveLength(2);

        expect(listItems[0].textContent).toContain('Student id: 666');
        expect(listItems[1].textContent).toContain('Student id: 999');

        expect(fetch).toHaveBeenCalledTimes(1);
    })
})