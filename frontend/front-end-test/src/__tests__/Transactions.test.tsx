import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Transactions from '../pages/Transactions';

afterEach(() => {
    jest.clearAllMocks();
  });

describe('Transactions', () => {
    test('render transactions list', ()=>{
        render(<Transactions />);
    });
});