import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Transactions from '../pages/Transactions';
import Home from '../pages/Home';

afterEach(() => {
    jest.clearAllMocks();
  });

describe('Company details in home', () => {
    test('render company details', ()=>{
        render(<Home />);
    });
});