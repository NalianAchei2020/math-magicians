import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import Calculator from '../../components/Calculator';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  createRoot(container);
  container.remove();
  container = null;
});

describe('testing calculator and events', () => {
  it('testing for events on calculator', () => {
    act(() => {
      render(<Calculator />, container);
    });

    expect(pretty(container.innerHTML)).toMatchSnapshot();

    const event1 = fireEvent.click(screen.getByText('1'));
    expect(event1).toBe(true);

    const event2 = fireEvent.click(screen.getByText('2'));
    expect(event2).toBe(true);

    const event3 = fireEvent.click(screen.getByText('-'));
    expect(event3).toBe(true);

    const event4 = fireEvent.click(screen.getByText('7'));
    expect(event4).toBe(true);
  });
});
