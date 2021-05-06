import {render, screen} from '@testing-library/react';
import Home from './Home';

test('renders Hi', () => {
  render(<Home />);

  screen.getByRole('')
})