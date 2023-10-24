import { SorareInput } from './SorareInput';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';

describe(SorareInput.name, () => {
  it('should work', () => {
    function TestForm() {
      return <SorareInput />;
    }

    render(<TestForm />);
    screen.debug();
    // const element = screen.getByText(/Value/);
    // expect(element).toBeDefined();
    // expect(element).toHaveProperty('class');
    // expect(element).toHaveLength(2);

    const button = screen.getByTestId('button.count');
    expect(button).toBeDefined();
    // expect(button.className).toBe('Phil');
    expect(button.textContent).toContain('count is 0');
    userEvent.click(button);
    screen.debug();
    expect(button.textContent).toContain('count is 1');
  });
});
