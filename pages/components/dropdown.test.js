import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

// Test 1: Check if dropdown renders correctly
test('renders dropdown with the correct props', () => {
  const options = [{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }];
  const { getByLabelText, getByText } = render(<Dropdown label="Test Dropdown" options={options} value="1" onChange={() => {}}/>);

  expect(getByLabelText('Test Dropdown')).toBeInTheDocument();
  expect(getByText('Option 1')).toBeInTheDocument();
  expect(getByText('Option 2')).toBeInTheDocument();
});

// Test 2: Check if the onChange function is called on option click
test('calls the onChange function on option click', () => {
  const options = [{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }];
  const onChange = jest.fn();
  const { getByTestId } = render(<Dropdown label="Test Dropdown" options={options} value="1" onChange={onChange}/>);

  fireEvent.change(getByTestId('dropdown'), { target: { value: '2' } });

  expect(onChange).toHaveBeenCalled();
});


// Test 3: Check if the correct option is selected initially
test('shows the correct initial selected value', () => {
  const options = [{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }];
  const { getByTestId } = render(<Dropdown label="Test Dropdown" options={options} value="2" onChange={() => {}}/>);

  expect(getByTestId('dropdown').value).toBe('2');
});