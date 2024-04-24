import {render, fireEvent, screen} from '@testing-library/react'
import Footer from '@components/footer/footer'

describe('Footer', () => {
    it('should have footer text', () => {
        // ARRANGE
        render(<Footer />)

        // ACT
        const myElem = screen.getByText('CI/CD - Olivia Lennerö 2024 - O. Lennerö AB - Kvadrat AB')

        //ASSERT
        expect(myElem).toBeInTheDocument()
    })

    it('should have a paragraph with the correct text', async () => {
      // ARRANGE
      render(<Footer />)

      // ACT
      await screen.findByRole('paragraph')

      // ASSERT
      expect(screen.getByRole('paragraph')).toHaveTextContent('CI/CD - Olivia Lennerö 2024 - O. Lennerö AB - Kvadrat AB')
    })
})