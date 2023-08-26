1. Test that the Dropdown component renders correctly with the given props:

```jsx
import React from 'react';
import { render } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders Dropdown component with correct props', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const value = 'option2';
  const onChange = jest.fn();
  const label = 'Select Option';
  const { getByTestId } = render(
    <Dropdown
      dataTestId="dropdown-component"
      options={options}
      value={value}
      onChange={onChange}
      label={label}
    />
  );

  const dropdownComponent = getByTestId('dropdown-component');
  expect(dropdownComponent).toBeInTheDocument();

  const dropdownLabel = getByText(label);
  expect(dropdownLabel).toBeInTheDocument();

  const dropdownSelect = getByLabelText(label);
  expect(dropdownSelect).toBeInTheDocument();
});
```

2. Test that the onChange event is called correctly when selecting an option:

```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

test('calls onChange with the selected option value', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const value = 'option2';
  const onChange = jest.fn();
  const label = 'Select Option';
  const { getByLabelText } = render(
    <Dropdown
      dataTestId="dropdown-component"
      options={options}
      value={value}
      onChange={onChange}
      label={label}
    />
  );

  const dropdownSelect = getByLabelText(label);
  fireEvent.change(dropdownSelect, { target: { value: 'option3' } });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith('option3');
});
```

3. Test that the options are rendered correctly with the given props:

```jsx
import React from 'react';
import { render } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders options correctly', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const value = 'option2';
  const onChange = jest.fn();
  const label = 'Select Option';
  const { getByTestId } = render(
    <Dropdown
      dataTestId="dropdown-component"
      options={options}
      value={value}
      onChange={onChange}
      label={label}
    />
  );

  const dropdownComponent = getByTestId('dropdown-component');
  const option1 = getByText('Option 1');
  const option2 = getByText('Option 2');
  const option3 = getByText('Option 3');

  expect(dropdownComponent).toContainElement(option1);
  expect(dropdownComponent).toContainElement(option2);
  expect(dropdownComponent).toContainElement(option3);
});
```