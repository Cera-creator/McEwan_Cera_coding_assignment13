import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './Radio button';

describe('RadioButton component', () => {
  it('is visible when rendered', () => {
    const { getByLabelText } = render(
      <RadioButton label="Option 1" name="group" value="1" />
    );
    expect(getByLabelText('Option 1')).toBeVisible();
  });

  it('has grey background and disabled cursor when disabled', () => {
    const { getByLabelText } = render(
      <RadioButton label="Option 1" name="group" value="1" disabled />
    );
    const radio = getByLabelText('Option 1');
    expect(radio).toHaveStyle('background-color: #ccc');
    expect(radio).toHaveStyle('cursor: not-allowed');
  });
});
