import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Qoutes from '../../components/qoutes';

jest.mock('axios', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Qoutes component', () => {
  test('renders correctly', async () => {
    const mockQuotes = {
      quote: 'Test Quote',
      author: 'Test Author',
      category: 'Test Category',
    };
    const axios = require('axios');
    axios.default.mockResolvedValueOnce({ data: [mockQuotes] });

    const { getByText } = render(<Qoutes />);

    // Check if loading message is rendered
    const loadingMessage = getByText('loading....');
    expect(loadingMessage).toMatchSnapshot();

    // Wait for the data to be fetched and rendered
    await waitFor(() => {
      // Check if the quote, author, and category are rendered correctly
      const quoteElement = getByText('Quote:');
      const authorElement = getByText('Author:');
      const categoryElement = getByText('Category:');

      expect(quoteElement).toMatchSnapshot();
      expect(authorElement).toMatchSnapshot();
      expect(categoryElement).toMatchSnapshot();

      // Check if the data is rendered correctly
      const quoteValueElement = getByText(mockQuotes.quote);
      const authorValueElement = getByText(mockQuotes.author);
      const categoryValueElement = getByText(mockQuotes.category);

      expect(quoteValueElement).toMatchSnapshot();
      expect(authorValueElement).toMatchSnapshot();
      expect(categoryValueElement).toMatchSnapshot();
    });
  });

  test('handles error during data fetching', async () => {
    const errorMessage = 'Failed to fetch quotes.';
    const axios = require('axios');
    axios.default.mockRejectedValueOnce(new Error(errorMessage));

    const { getByText } = render(<Qoutes />);

    // Check if loading message is rendered
    const loadingMessage = getByText('loading....');
    expect(loadingMessage).toMatchSnapshot();

    // Wait for the error message to be rendered
    await waitFor(() => {
      // Check if the error message is rendered correctly
      const errorElement = getByText(errorMessage);
      expect(errorElement).toMatchSnapshot();
    });
  });
});
