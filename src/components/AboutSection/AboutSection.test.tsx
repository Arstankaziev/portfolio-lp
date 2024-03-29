import AboutSection from './AboutSection.index'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { colorTheme } from 'themes/colorTheme'

describe('<AboutSection />', () => {
   it('should render the heading', () => {
      render(
         <ThemeProvider theme={colorTheme}>
            <AboutSection />
         </ThemeProvider>
      )

      expect(screen.getByRole('main')).toBeInTheDocument()
   })
})
