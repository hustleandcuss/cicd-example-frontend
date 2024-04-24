import {render, fireEvent, screen} from '@testing-library/react'
import Home from '../page'

describe('Home', () => {
    it('should have heading text', () => {
        // ARRANGE
        render(<Home />)

        // ACT
        const heading = screen.getByRole('heading')

        //ASSERT
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent('Student Portal!')
    })

    it('should have nav links', () => {
        // ARRANGE
        render(<Home />)

        // ACT
        const links = screen.getAllByRole('link')
        const buttons = screen.getAllByRole('button')

        //ASSERT
        expect(links).toHaveLength(3)
        expect(buttons).toHaveLength(3)
        expect(links[0]).toHaveTextContent('COURSES')
        expect(links[1]).toHaveTextContent('STUDENTS')
        expect(links[2]).toHaveTextContent('HELP')
    })
})