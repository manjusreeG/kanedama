import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

afterEach(() => {
    jest.clearAllMocks();
  });

describe('Nav-bar', () => {
    test('render nav bar list', ()=>{
        render(<Navbar />);
    });
});
