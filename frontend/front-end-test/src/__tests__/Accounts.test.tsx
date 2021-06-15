import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Accounts from '../components/Accounts';

afterEach(() => {
    jest.clearAllMocks();
  });

describe('Accounts', () => {
    test('render Accounts', ()=>{
        render(<Accounts />);
    });
});