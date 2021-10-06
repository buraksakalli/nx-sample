import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';
import { Button } from 'components';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
});

describe('Link', () => {
  it('Should return button title as Test', () => {
    const { getByText } = render(<Button title="Test" link="#" />);
    expect(getByText('Test').href).toBe('http://localhost/#');
  });
});
