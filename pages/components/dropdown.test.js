import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders with correct label', () => {
  render(<Dropdown label="Test Label" options={[]} value="" onChange={() => {}} />);
  const linkElement = screen.getByText(/Test Label/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders with correct options', () => {
  const options = [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }];
  render(<Dropdown label="Test Label" options={options} value="" onChange={() => {}} />);
  options.forEach(opt => {
    const optionElement = screen.getByText(new RegExp(opt.label, 'i'));
    expect(optionElement).toBeInTheDocument();
  });
});

test('calls onChange handler when an option is selected', () => {
  const onClickMock = jest.fn();
  const options = [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }];
  render(<Dropdown label="Test Label" options={options} value="" onChange={onClickMock} />);
  const selectElement = screen.getByRole('combobox');
  fireEvent.change(selectElement, { target: { value: options[1].value } });
  expect(onClickMock).toHaveBeenCalledWith(options[1].value);
});
