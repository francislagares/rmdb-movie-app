import { render } from '@testing-library/react';
import Home from 'src/pages/index';

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });
});
