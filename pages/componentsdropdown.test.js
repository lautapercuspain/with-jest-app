1. Test that the label is rendered correctly:
```jsx
import React from 'react';
import { render } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders label correctly', () => {
  const label = 'Dropdown Label';
  const { getByLabelText } = render(<Dropdown label={label} />);
  expect(getByLabelText(label)).toBeInTheDocument();
});
```

2. Test that the options are rendered correctly:
```jsx
import React from 'react';
import { render } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders options correctly', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  const { getByTestId } = render(<Dropdown options={options} />);
  const selectElement = getByTestId('dropdown');
  
  options.forEach((option) => {
    const optionElement = selectElement.querySelector(`option[value="${option.value}"]`);
    expect(optionElement).toBeInTheDocument();
    expect(optionElement.textContent).toBe(option.label);
  });
});
```

3. Test that onChange event is triggered correctly:
```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

test('triggers onChange event correctly', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  const onChange = jest.fn();
  const { getByTestId } = render(<Dropdown options={options} onChange={onChange} />);
  const selectElement = getByTestId('dropdown');
  
  fireEvent.change(selectElement, { target: { value: 'option2' } });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith('option2');
});
```