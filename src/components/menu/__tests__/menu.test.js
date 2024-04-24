import {render, fireEvent, screen} from '@testing-library/react'
import Menu from '@components/menu/menu'

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe('Menu', () => {
    it('should have all links', () => {
        mockUsePathname.mockImplementation(() => '/page/courses');

        // ARRANGE
        render(<Menu />)

        // ACT
        const links = screen.getAllByRole('link')

        //ASSERT
        expect(links).toHaveLength(4)
    })

    it('should have all buttons', async () => {
      mockUsePathname.mockImplementation(() => '/page/students');

      // ARRANGE
      render(<Menu />)

      // ACT
      const buttons = screen.getAllByRole('button')

      // ASSERT
      expect(buttons).toHaveLength(3)
    })

    it('should have all buttons', async () => {
      mockUsePathname.mockImplementation(() => '/page/students');

      // ARRANGE
      render(<Menu />)

      // ACT
      const image = screen.getByRole('img')

      // ASSERT
      expect(image).toBeInTheDocument()
      expect(image).toHaveProperty('alt', 'School logo from internetz')
    })
})