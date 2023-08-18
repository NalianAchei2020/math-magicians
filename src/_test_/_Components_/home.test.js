import React from 'react';
import { render } from '@testing-library/react';

import Home from '../../components/home/home';

describe('Home component', () => {
  test('renders welcome message', () => {
    const { getByText } = render(<Home />);
    const welcomeMessage = getByText('Welcome to our page');
    expect(welcomeMessage).toMatchSnapshot();
  });
});
