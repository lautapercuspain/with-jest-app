import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders the correct label', () => {
  const { getByText } = render(<Dropdown label="Test label" />);
  expect(getByText('Test label')).toBeInTheDocument();
});

test('calls the onChange handler when an option is selected', () => {
  const handleChange = jest.fn();
  const { getByLabelText } = render(
    <Dropdown
      label="Test label"
      options={[{ label: 'Option 1', value: '1' }]}
      onChange={handleChange}
    />
  );
  
  fireEvent.change(getByLabelText('Test label'), { target: { value: '1' } });

  expect(handleChange).toHaveBeenCalledWith('1');
});