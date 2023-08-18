import React from 'react';
import { render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import Qoutes from '../../components/qoutes';

let container = null;
let mock = null;

beforeEach(() => {
  // Setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);

  // Create a new mock adapter instance
  mock = new MockAdapter(axios);
});

afterEach(() => {
  // Cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('testing for the UI of QuotePage', async () => {
  // Define the mock response data
  const responseData = [
    {
      quote: 'Test quote',
      author: 'Test author',
      category: 'Test category',
    },
  ];

  // Mock the API request
  mock
    .onGet('https://api.api-ninjas.com/v1/quotes?category=happiness')
    .reply(200, responseData);

  await act(async () => {
    render(<Qoutes />, container);
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
