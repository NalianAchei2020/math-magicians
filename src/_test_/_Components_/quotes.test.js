import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import Qoutes from '../../components/qoutes';

jest.mock('axios');

describe('Qoutes component', () => {
  test('renders correctly', async () => {
    const mockQuotes = {
      quote: 'Test Quote',
      author: 'Test Author',
      category: 'Test Category',
    };
    axios.mockResolvedValueOnce({ data: [mockQuotes] });

    const { getByText } = render(<Qoutes />);

    // Check if loading message is rendered
    const loadingMessage = getByText('loading....');
    expect(loadingMessage).toBeInTheDocument();

    // Wait for the data to be fetched and rendered
    await waitFor(() => {
      // Check if the quote, author, and category are rendered correctly
      const quoteElement = getByText('Quote:');
      const authorElement = getByText('Author:');
      const categoryElement = getByText('Category:');

      expect(quoteElement).toBeInTheDocument();
      expect(authorElement).toBeInTheDocument();
      expect(categoryElement).toBeInTheDocument();

      // Check if the data is rendered correctly
      const quoteValueElement = getByText(mockQuotes.quote);
      const authorValueElement = getByText(mockQuotes.author);
      const categoryValueElement = getByText(mockQuotes.category);

      expect(quoteValueElement).toBeInTheDocument();
      expect(authorValueElement).toBeInTheDocument();
      expect(categoryValueElement).toBeInTheDocument();
    });
  });

  test('handles error during data fetching', async () => {
    const errorMessage = 'Failed to fetch quotes.';
    axios.mockRejectedValueOnce(new Error(errorMessage));

    const { getByText } = render(<Qoutes />);

    // Check if loading message is rendered
    const loadingMessage = getByText('loading....');
    expect(loadingMessage).toBeInTheDocument();

    // Wait for the error message to be rendered
    await waitFor(() => {
      // Check if the error message is rendered correctly
      const errorElement = getByText(errorMessage);
      expect(errorElement).toBeInTheDocument();
    });
  });
});
