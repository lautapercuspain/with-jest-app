test('renders dropdown component with options', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const { getByTestId, getByLabelText } = render(
    <Dropdown
      dataTestId="dropdown-component"
      options={options}
      value="option1"
      onChange={() => {}}
      label="Select an option"
    />
  );

  const dropdownComponent = getByTestId('dropdown-component');
  const dropdownLabel = getByLabelText('Select an option');
  const dropdown = getByLabelText('Select an option', { selector: 'select' });

  expect(dropdownComponent).toBeInTheDocument();
  expect(dropdownLabel).toBeInTheDocument();
  expect(dropdown).toBeInTheDocument();
  expect(dropdown.value).toBe('option1');
  expect(dropdown.options.length).toBe(3);
  expect(dropdown.options[0].value).toBe('option1');
  expect(dropdown.options[0].label).toBe('Option 1');
  expect(dropdown.options[1].value).toBe('option2');
  expect(dropdown.options[1].label).toBe('Option 2');
  expect(dropdown.options[2].value).toBe('option3');
  expect(dropdown.options[2].label).toBe('Option 3');
});

test('calls onChange callback when dropdown value changes', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const onChangeMock = jest.fn();

  const { getByLabelText } = render(
    <Dropdown
      dataTestId="dropdown-component"
      options={options}
      value="option1"
      onChange={onChangeMock}
      label="Select an option"
    />
  );

  const dropdown = getByLabelText('Select an option', { selector: 'select' });

  fireEvent.change(dropdown, { target: { value: 'option2' } });

  expect(onChangeMock).toHaveBeenCalledTimes(1);
  expect(onChangeMock).toHaveBeenCalledWith('option2');
});