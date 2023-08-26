```jsx
// Test 1
test('renders dropdown with options', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  const onChange = jest.fn();

  render(<Dropdown options={options} value="option2" onChange={onChange} label="Select an option" />);

  const dropdownElement = screen.getByTestId('dropdown');
  const optionsElements = screen.getAllByRole('option');

  expect(dropdownElement).toBeInTheDocument();
  expect(dropdownElement).toHaveValue('option2');

  expect(screen.getByLabelText('Select an option')).toBeInTheDocument();

  expect(optionsElements).toHaveLength(3);
  expect(optionsElements[0]).toHaveValue('option1');
  expect(optionsElements[0]).toHaveTextContent('Option 1');
  expect(optionsElements[1]).toHaveValue('option2');
  expect(optionsElements[1]).toHaveTextContent('Option 2');
  expect(optionsElements[2]).toHaveValue('option3');
  expect(optionsElements[2]).toHaveTextContent('Option 3');

  fireEvent.change(dropdownElement, { target: { value: 'option3' } });
  expect(onChange).toHaveBeenCalled();
});

// Test 2
test('calls onChange when option is selected', () => {
  const options = [{ label: 'Option 1', value: 'option1' }];
  const onChange = jest.fn();

  render(<Dropdown options={options} value="option1" onChange={onChange} label="Select an option" />);

  const dropdownElement = screen.getByTestId('dropdown');

  fireEvent.change(dropdownElement, { target: { value: 'option1' } });
  expect(onChange).not.toHaveBeenCalled();

  fireEvent.change(dropdownElement, { target: { value: 'option2' } });
  expect(onChange).toHaveBeenCalledWith('option2');
});
```