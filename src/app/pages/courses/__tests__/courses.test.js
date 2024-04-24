import {render, fireEvent, screen} from '@testing-library/react'
import { act, waitFor } from 'react-dom/test-utils';
import Courses from '../page'

const mockUsePathname = jest.fn();
const URL = 'http://example.com';

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

const mockCourses = [
    {'title': 'Test Course', 'id': '666'},
    {'title': 'Test Course 2', 'id': '999'}
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockCourses),
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

describe('Courses Page', () => {
    it('should have correct heading', async () => {
        process.env.NEXT_PUBLIC_BACKEND_URL = URL;

        // ARRANGE
        await act(() => Promise.resolve(render(<Courses />)));

        // ACT
        const courseHeading = screen.getByText('COURSES');

        //ASSERT
        expect(courseHeading).toBeInTheDocument();
    })

    it('should load course list correctly', async () => {
        process.env.NEXT_PUBLIC_BACKEND_URL = URL;

        // ARRANGE
        await act(() => Promise.resolve(render(<Courses />)));

        // ACT
        const listItems = screen.getAllByRole('listitem');

        //ASSERT
        expect(listItems).toHaveLength(2);
        expect(listItems[0]).toHaveTextContent('Test Course');
        expect(listItems[1]).toHaveTextContent('Test Course 2');
        expect(fetch).toHaveBeenCalledTimes(1);
    })
})