import { render, screen } from '@testing-library/react';

import Header from './Header';

const headerProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setQuery: () => {},
};

describe('Header component', () => {
  it('renders logo in header', () => {
    render(<Header {...headerProps} />);
    const logo = screen.getByAltText(/^rmdb-logo$/i);
    const logoSmall = screen.getByAltText(/^rmdb-logo-small$/i);

    expect(logo).toBeInTheDocument();
    expect(logoSmall).toBeInTheDocument();
  });
});
