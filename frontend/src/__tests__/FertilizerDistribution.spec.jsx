import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import FertilizerDistribution from '../components/System/AO/Fertilizer/FertilizerDistribution';

jest.mock('axios');

// Mock the window.alert function
window.alert = jest.fn();

// Mock the localStorage
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };
  
  // Provide the expected data structure for the 'agriofficer' item
  const expectedData = {
    agriculturalOfficer: {
      id: '123',
      // other properties...
    },
  };
  
  // Set up the mock localStorage before each test
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    localStorageMock.getItem.mockReturnValue(JSON.stringify(expectedData));
  });

describe('Test Fertilizer Distribution', () => {
  test('renders Fertilizer Distribution component', () => {
    render(<FertilizerDistribution />);
  });

  test('renders input fields and submit button', () => {
    render(<FertilizerDistribution />);

    // Check if input fields are rendered
    const farmerUsernameInput = screen.getByPlaceholderText('Enter farmer username');
    expect(farmerUsernameInput).toBeInTheDocument();

    const fertilizerTypeInput = screen.getByPlaceholderText('Enter fetilizer type');
    expect(fertilizerTypeInput).toBeInTheDocument();

    const yearInput = screen.getByPlaceholderText('Enter year');
    expect(yearInput).toBeInTheDocument();

    const monthSelect = screen.getByLabelText('Default select example');
    expect(monthSelect).toBeInTheDocument();

    const quantityInput = screen.getByPlaceholderText('Enter quantity');
    expect(quantityInput).toBeInTheDocument();

    // Check if submit button is rendered
    const submitButton = screen.getByText('Add Fertilizer Record');
    expect(submitButton).toBeInTheDocument();
  });

  test('handles form submission correctly', async () => {
    render(<FertilizerDistribution />);

    const farmerUsernameInput = screen.getByPlaceholderText('Enter farmer username');
    const fertilizerTypeInput = screen.getByPlaceholderText('Enter fetilizer type');
    const yearInput = screen.getByPlaceholderText('Enter year');
    const monthSelect = screen.getByLabelText('Default select example');
    const quantityInput = screen.getByPlaceholderText('Enter quantity');
    const submitButton = screen.getByText('Add Fertilizer Record');

    // Set input values
    fireEvent.change(farmerUsernameInput, { target: { value: 'JohnDoe' } });
    fireEvent.change(fertilizerTypeInput, { target: { value: 'Nitrogen' } });
    fireEvent.change(yearInput, { target: { value: '2022' } });
    fireEvent.change(monthSelect, { target: { value: 'January' } });
    fireEvent.change(quantityInput, { target: { value: '10' } });

    // Mock the axios post request
    axios.post.mockResolvedValueOnce();

    // Submit the form
    fireEvent.click(submitButton);

    // Assert if the post request is called with the correct data
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:8075/ao/addfertilizer',
      expect.objectContaining({
        farmerUsername: 'JohnDoe',
        fertilizerType: 'Nitrogen',
        year: '2022',
        month: 'January',
        quantity: '10',
        aoId: '123',
      })
    );

  });
});
