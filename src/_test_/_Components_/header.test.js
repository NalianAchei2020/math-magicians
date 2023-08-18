import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import Header from '../../components/header/header';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('testing for the UI of Navbar', () => {
  act(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
      container
    );
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
