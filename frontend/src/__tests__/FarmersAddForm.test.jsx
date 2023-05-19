import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FarmerAddForm from '../components/System/AO/Farmers/FarmerAddForm';

describe('Test Farmers Add form', () => {
  test('renders Farmers Add form component', () => {
    render(<FarmerAddForm />);
  });

  test('renders input fields and submit button', () => {
    render(<FarmerAddForm />);

    // Check if input fields are rendered
    const placeholderText = 'Enter farmer full name';
    const fullNameInput = screen.getByPlaceholderText(placeholderText);
    expect(fullNameInput).toBeInTheDocument();

    const usernameInput = screen.getByPlaceholderText('Enter unique username');
    expect(usernameInput).toBeInTheDocument();

    const phoneInput = screen.getByPlaceholderText('Enter contact number');
    expect(phoneInput).toBeInTheDocument();

    const addressInput = screen.getByPlaceholderText('Enter address');
    expect(addressInput).toBeInTheDocument();

    const divisionInput = screen.getByPlaceholderText('Enter division');
    expect(divisionInput).toBeInTheDocument();

    const districtInput = screen.getByPlaceholderText('Enter district');
    expect(districtInput).toBeInTheDocument();

    const cropTypeSelect = screen.getByLabelText('Default select example');
    expect(cropTypeSelect).toBeInTheDocument();

    const notesTextarea = screen.getByPlaceholderText(
      'Add additional details on farmer if any'
    );
    expect(notesTextarea).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText('Enter password');
    expect(passwordInput).toBeInTheDocument();

    // Check if submit button is rendered
    const submitButton = screen.getByText('Register Farmer');
    expect(submitButton).toBeInTheDocument();
  });
});
