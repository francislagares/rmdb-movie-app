import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header component', () => {
  it('renders logo in header', () => {
    render(<Header />);
    const logo = screen.getByAltText(/^rmdb-logo$/i);
    const logoSmall = screen.getByAltText(/^rmdb-logo-small$/i);

    expect(logo).toBeInTheDocument();
    expect(logoSmall).toBeInTheDocument();
  });
});
